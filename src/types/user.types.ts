/**
 * 사용자 관련 타입 정의
 */

/**
 * 사용자 엔티티
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 사용자 생성 요청
 */
export interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

/**
 * 사용자 업데이트 요청
 */
export interface UpdateUserRequest {
  name?: string;
  email?: string;
}
