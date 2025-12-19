import { Mail, Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserResponseDto } from '@/dto/user.dto';

/**
 * 사용자 카드 Props
 */
interface UserCardProps {
  user: UserResponseDto;
}

/**
 * 사용자 카드 컴포넌트
 */
export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="h-4 w-4" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{new Date(user.createdAt).toLocaleDateString('ko-KR')}</span>
        </div>
      </CardContent>
    </Card>
  );
}
