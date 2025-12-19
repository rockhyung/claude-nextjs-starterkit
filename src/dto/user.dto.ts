import { z } from 'zod';
import { User } from '@/types/user.types';
import { BaseDto } from './base.dto';

/**
 * 사용자 생성 DTO 스키마 (Zod v4)
 */
export const createUserSchema = z.object({
  email: z
    .string()
    .email('유효한 이메일을 입력해주세요'),
  name: z
    .string()
    .min(2, '이름은 최소 2자 이상이어야 합니다'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
});

/**
 * 사용자 업데이트 DTO 스키마
 */
export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
});

/**
 * 사용자 응답 DTO
 */
export class UserResponseDto extends BaseDto<User> {
  id!: string;
  email!: string;
  name!: string;
  createdAt!: string;
  updatedAt!: string;

  fromEntity(entity: User): this {
    this.id = entity.id;
    this.email = entity.email;
    this.name = entity.name;
    this.createdAt = entity.createdAt.toISOString();
    this.updatedAt = entity.updatedAt.toISOString();
    return this;
  }

  toEntity(): User {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      createdAt: new Date(this.createdAt),
      updatedAt: new Date(this.updatedAt),
    };
  }
}
