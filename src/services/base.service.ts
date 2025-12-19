/**
 * 기본 Service 인터페이스
 */
export interface IBaseService<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}
