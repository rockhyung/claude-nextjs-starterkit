import { UserList } from '@/components/features/user/UserList';

/**
 * 사용자 목록 페이지
 */
export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">사용자 관리</h1>
        <p className="text-gray-600 mt-2">
          등록된 모든 사용자를 확인할 수 있습니다
        </p>
      </div>

      <UserList />
    </div>
  );
}
