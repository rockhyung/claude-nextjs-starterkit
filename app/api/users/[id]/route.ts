import { NextRequest } from 'next/server';
import {
  successResponse,
  handleError,
} from '@/controllers/base.controller';
import { UserService } from '@/services/user.service';
import { UserRepository } from '@/repositories/user.repository';
import { updateUserSchema } from '@/dto/user.dto';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

/**
 * GET /api/users/[id] - 사용자 상세 조회
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const { id } = await params;
    const user = await userService.getById(id);
    return successResponse(user);
  } catch (error) {
    return handleError(error);
  }
}

/**
 * PATCH /api/users/[id] - 사용자 업데이트
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const { id } = await params;
    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);
    const user = await userService.update(id, validatedData);
    return successResponse(user, '사용자가 업데이트되었습니다');
  } catch (error) {
    return handleError(error);
  }
}

/**
 * DELETE /api/users/[id] - 사용자 삭제
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const { id } = await params;
    await userService.delete(id);
    return successResponse(null, '사용자가 삭제되었습니다');
  } catch (error) {
    return handleError(error);
  }
}
