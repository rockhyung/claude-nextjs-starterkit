import Link from 'next/link';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/**
 * 홈 페이지
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container-custom py-20">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Next.js 15 Starter Kit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            엔터프라이즈급 웹 애플리케이션을 위한 완벽한 시작점
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/dashboard">
                시작하기 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/users">사용자 목록</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>타입 안전성</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                TypeScript와 Zod를 활용한 완벽한 타입 안전성 보장
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Layers className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>레이어드 아키텍처</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Controller - Service - Repository 패턴으로 확장 가능한 구조
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>최신 기술 스택</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Next.js 15, React 19, TailwindCSS v4로 빠른 개발 경험
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
