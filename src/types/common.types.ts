/**
 * 공통 타입 정의
 */

/**
 * API 응답 공통 타입
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

/**
 * API 에러 타입
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * 페이지네이션 파라미터
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * 페이지네이션된 응답
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
