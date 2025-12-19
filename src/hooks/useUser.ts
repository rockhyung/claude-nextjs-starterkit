'use client';

import { useEffect, useState } from 'react';
import { UserResponseDto } from '@/dto/user.dto';
import { useUserStore } from '@/stores/useUserStore';

/**
 * 사용자 목록 조회 커스텀 훅
 */
export function useUsers() {
  const { users, setUsers, setLoading, setError } = useUserStore();
  const { isLoading, error } = useUserStore();

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        if (data.success) {
          setUsers(data.data);
        } else {
          setError(
            data.error?.message || '사용자 목록을 불러올 수 없습니다'
          );
        }
      } catch (error) {
        setError('네트워크 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setLoading, setError]);

  return { users, isLoading, error };
}

/**
 * 단일 사용자 조회 커스텀 훅
 */
export function useUser(id: string) {
  const [user, setUser] = useState<UserResponseDto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        if (data.success) {
          setUser(data.data);
        } else {
          setError(data.error?.message || '사용자를 불러올 수 없습니다');
        }
      } catch (error) {
        setError('네트워크 오류가 발생했습니다');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, isLoading, error };
}
