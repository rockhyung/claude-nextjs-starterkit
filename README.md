# Next.js 15 Starter Kit

Next.js 15 App Router 기반의 엔터프라이즈급 웹 애플리케이션 스타터킷입니다.

## 주요 기능

- ⚡ **Next.js 15** - App Router 및 Server Components
- 🎨 **TailwindCSS v4** - CSS-first 설정, 5배 빠른 빌드
- 🧩 **shadcn/ui** - 재사용 가능한 컴포넌트 라이브러리
- 📦 **TypeScript** - strict mode로 완벽한 타입 안전성
- 🏗️ **레이어드 아키텍처** - Controller → Service → Repository
- 🔄 **Zustand** - 간단하고 강력한 상태 관리
- 📝 **React Hook Form + Zod** - 타입 안전한 폼 검증
- 🎯 **의존성 주입** - 확장 가능한 아키텍처
- 🎭 **lucide-react** - 1,000+ 현대적 아이콘

## 시작하기

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 환경 변수 설정

`.env.local.example` 파일을 복사하여 `.env.local` 파일을 생성하세요.

```bash
cp .env.local.example .env.local
```

## 프로젝트 구조

```
src/
├── app/              # Next.js 15 App Router
│   ├── (main)/      # 메인 라우트 그룹 (Header/Footer 포함)
│   ├── api/         # API 라우트 (Controller)
│   └── globals.css  # TailwindCSS v4 설정
├── components/       # React 컴포넌트
│   ├── ui/          # shadcn/ui 컴포넌트
│   ├── common/      # 공통 컴포넌트 (Header, Footer)
│   └── features/    # 기능별 컴포넌트
├── controllers/      # API 컨트롤러
├── services/         # 비즈니스 로직
├── repositories/     # 데이터 접근 레이어
├── dto/             # Data Transfer Objects
├── types/           # TypeScript 타입 정의
├── lib/             # 유틸리티 및 설정
│   ├── utils.ts
│   ├── di-container.ts  # 의존성 주입
│   └── validators.ts    # Zod 스키마
├── stores/          # Zustand 상태 관리
├── hooks/           # 커스텀 React 훅
└── constants/       # 상수
```

## 아키텍처

### 레이어드 아키텍처

1. **Controller Layer** (`src/controllers/`, `app/api/`)
   - API 라우트 핸들러
   - 요청/응답 처리
   - 입력 검증

2. **Service Layer** (`src/services/`)
   - 비즈니스 로직
   - 트랜잭션 관리
   - 도메인 규칙

3. **Repository Layer** (`src/repositories/`)
   - 데이터 접근
   - ORM 통합 (Prisma, Drizzle)
   - 쿼리 최적화

### 의존성 주입

`src/lib/di-container.ts`에서 중앙 집중식 의존성 관리를 제공합니다.

```typescript
import { container } from '@/lib/di-container';

const userService = container.userService;
```

## 스크립트

```bash
# 개발 서버 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 린트 검사
npm run lint

# Prettier 포맷팅
npm run format

# TypeScript 타입 검사
npm run type-check
```

## 코딩 스타일

- **들여쓰기**: 2칸 (spaces)
- **네이밍**: camelCase, PascalCase (컴포넌트)
- **주석**: 한국어
- **커밋 메시지**: 한국어
- **any 타입**: 사용 금지 (ESLint enforces)
- **클라이언트 컴포넌트**: `'use client'` 명시

## 기술 스택

### 핵심

- **Next.js 15.5+** - React 프레임워크
- **React 19.2+** - UI 라이브러리
- **TypeScript 5.7+** - 언어 (strict mode)

### 스타일링

- **TailwindCSS v4.1+** - CSS-first 유틸리티 프레임워크
- **shadcn/ui** - 컴포넌트 라이브러리
- **lucide-react 0.561+** - 아이콘 라이브러리

### 상태 관리 & 폼

- **Zustand 5.0+** - 상태 관리
- **React Hook Form 7.68+** - 폼 상태 관리
- **Zod 4.2+** - 스키마 검증 (14배 빠른 성능)

### 개발 도구

- **ESLint 9+** - 코드 린팅
- **Prettier 3.4+** - 코드 포맷팅
- **TypeScript** - 타입 체킹

## API 엔드포인트

### 사용자 API

#### 목록 조회
```bash
GET /api/users
```

**응답**:
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "email": "user@example.com",
      "name": "사용자",
      "createdAt": "2025-12-18T00:00:00.000Z",
      "updatedAt": "2025-12-18T00:00:00.000Z"
    }
  ]
}
```

#### 단일 조회
```bash
GET /api/users/:id
```

#### 생성
```bash
POST /api/users
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "사용자",
  "password": "password123"
}
```

#### 업데이트
```bash
PATCH /api/users/:id
Content-Type: application/json

{
  "name": "새로운 이름",
  "email": "newemail@example.com"
}
```

#### 삭제
```bash
DELETE /api/users/:id
```

## 라이선스

MIT
