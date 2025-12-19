import { UserRepository } from '@/repositories/user.repository';
import { UserService } from '@/services/user.service';

/**
 * 의존성 주입 컨테이너
 * 싱글톤 패턴으로 구현하여 전체 애플리케이션에서
 * 동일한 인스턴스를 사용하도록 합니다.
 */
class DIContainer {
  private static instance: DIContainer;

  // Repository 인스턴스
  private _userRepository?: UserRepository;

  // Service 인스턴스
  private _userService?: UserService;

  private constructor() {}

  /**
   * DIContainer 싱글톤 인스턴스 획득
   */
  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  /**
   * UserRepository Getter
   * Lazy initialization 패턴 사용
   */
  get userRepository(): UserRepository {
    if (!this._userRepository) {
      this._userRepository = new UserRepository();
    }
    return this._userRepository;
  }

  /**
   * UserService Getter
   * Lazy initialization 패턴 사용
   */
  get userService(): UserService {
    if (!this._userService) {
      this._userService = new UserService(this.userRepository);
    }
    return this._userService;
  }
}

/**
 * 전역 DIContainer 인스턴스
 */
export const container = DIContainer.getInstance();
