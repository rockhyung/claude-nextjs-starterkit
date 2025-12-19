'use client';

import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGlobalStore } from '@/stores/useGlobalStore';

/**
 * 헤더 컴포넌트
 */
export function Header() {
  const { toggleSidebar } = useGlobalStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* 로고 & 사이드바 토글 */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="text-xl font-bold">
            Next.js Starter
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            대시보드
          </Link>
          <Link
            href="/users"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            사용자
          </Link>
        </nav>

        {/* 사용자 메뉴 */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
