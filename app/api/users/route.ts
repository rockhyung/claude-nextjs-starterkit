import { NextRequest } from 'next/server';
import {
  successResponse,
  handleError,
} from '@/controllers/base.controller';
import { UserService } from '@/services/user.service';
import { UserRepository } from '@/repositories/user.repository';
import { createUserSchema } from '@/dto/user.dto';

// 의존성 주입
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

/**
 * GET /api/users - 모든 사용자 조회
 */
export async function GET(_request: NextRequest): Promise<Response> {
  try {
    const users = await userService.getAll();
    return successResponse(users);
  } catch (error) {
    return handleError(error);
  }
}

/**
 * POST /api/users - 사용자 생성
 */
export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await request.json();

    // Zod v4 스키마 검증
    const validatedData = createUserSchema.parse(body);

    const user = await userService.create(validatedData);
    return successResponse(user, '사용자가 생성되었습니다');
  } catch (error) {
    return handleError(error);
  }
}
