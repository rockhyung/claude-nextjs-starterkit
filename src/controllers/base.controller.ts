import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/common.types';

/**
 * 성공 응답 생성 헬퍼
 */
export function successResponse<T>(
  data: T,
  message?: string
): NextResponse {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return NextResponse.json(response);
}

/**
 * 에러 응답 생성 헬퍼
 */
export function errorResponse(
  message: string,
  code: string = 'INTERNAL_ERROR',
  status: number = 500
): NextResponse {
  const response: ApiResponse<never> = {
    success: false,
    error: {
      code,
      message,
    },
  };
  return NextResponse.json(response, { status });
}

/**
 * 에러 핸들러
 */
export function handleError(error: unknown): NextResponse {
  if (error instanceof Error) {
    return errorResponse(error.message, 'BAD_REQUEST', 400);
  }
  return errorResponse('알 수 없는 오류가 발생했습니다');
}
