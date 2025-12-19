'use client';

import { create } from 'zustand';
import { UserResponseDto } from '@/dto/user.dto';

/**
 * 사용자 상태 타입
 */
interface UserState {
  users: UserResponseDto[];
  currentUser: UserResponseDto | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * 사용자 액션 타입
 */
interface UserActions {
  setUsers: (users: UserResponseDto[]) => void;
  setCurrentUser: (user: UserResponseDto | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

/**
 * 초기 상태
 */
const initialState: UserState = {
  users: [],
  currentUser: null,
  isLoading: false,
  error: null,
};

/**
 * 사용자 상태 관리 Zustand Store
 */
export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  setUsers: (users) => set({ users }),

  setCurrentUser: (currentUser) => set({ currentUser }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  reset: () => set(initialState),
}));
