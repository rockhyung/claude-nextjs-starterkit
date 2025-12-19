import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
} from '@/types/user.types';
import { BaseRepository } from './base.repository';

/**
 * 사용자 Repository (데이터 접근 레이어)
 * 주의: 실제 프로젝트에서는 Prisma, Drizzle 등 ORM과 연동해야 합니다
 */
export class UserRepository extends BaseRepository<User> {
  // 임시 메모리 저장소 (데모용)
  private users: User[] = [
    {
      id: '1',
      email: 'demo@example.com',
      name: 'Demo User',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  /**
   * 모든 사용자 조회
   */
  async findAll(): Promise<User[]> {
    return this.users;
  }

  /**
   * ID로 사용자 조회
   */
  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  /**
   * 이메일로 사용자 조회
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  /**
   * 사용자 생성
   */
  async create(data: CreateUserRequest): Promise<User> {
    const newUser: User = {
      id: String(this.users.length + 1),
      email: data.email,
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * 사용자 업데이트
   */
  async update(id: string, data: UpdateUserRequest): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('사용자를 찾을 수 없습니다');
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...data,
      updatedAt: new Date(),
    };
    return this.users[userIndex];
  }

  /**
   * 사용자 삭제
   */
  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('사용자를 찾을 수 없습니다');
    }
    this.users.splice(userIndex, 1);
  }
}
