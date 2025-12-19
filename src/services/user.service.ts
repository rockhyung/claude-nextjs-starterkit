import { CreateUserRequest, UpdateUserRequest } from '@/types/user.types';
import { UserRepository } from '@/repositories/user.repository';
import { UserResponseDto } from '@/dto/user.dto';
import { IBaseService } from './base.service';

/**
 * 사용자 Service (비즈니스 로직 레이어)
 */
export class UserService implements IBaseService<UserResponseDto> {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * 모든 사용자 조회
   */
  async getAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => new UserResponseDto().fromEntity(user));
  }

  /**
   * ID로 사용자 조회
   */
  async getById(id: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다');
    }
    return new UserResponseDto().fromEntity(user);
  }

  /**
   * 사용자 생성
   * 이메일 중복 체크를 포함한 비즈니스 로직 구현
   */
  async create(data: CreateUserRequest): Promise<UserResponseDto> {
    // 이메일 중복 체크
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error('이미 존재하는 이메일입니다');
    }

    const user = await this.userRepository.create(data);
    return new UserResponseDto().fromEntity(user);
  }

  /**
   * 사용자 업데이트
   */
  async update(
    id: string,
    data: UpdateUserRequest
  ): Promise<UserResponseDto> {
    const user = await this.userRepository.update(id, data);
    return new UserResponseDto().fromEntity(user);
  }

  /**
   * 사용자 삭제
   */
  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
