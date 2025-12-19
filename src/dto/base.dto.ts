/**
 * 기본 DTO 추상 클래스
 */
export abstract class BaseDto<T> {
  /**
   * 엔티티를 DTO로 변환
   */
  abstract fromEntity(entity: T): this;

  /**
   * DTO를 엔티티로 변환
   */
  abstract toEntity(): T;
}
