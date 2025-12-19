# List Routes

현재 프로젝트의 모든 API 라우트를 찾아서 표시해주세요.

다음 형식으로 정렬된 테이블로 보여주세요:

## API Routes

| Method | Path | File | Description |
|--------|------|------|-------------|

각 항목을 다음과 같이 구성해주세요:
- **Method**: GET, POST, PATCH, DELETE 등 (함수명에서 추출)
- **Path**: /api/... 형태의 경로 (폴더 구조에서 추출)
- **File**: app/api/... 형태의 파일 경로
- **Description**: 파일의 상단 주석에서 추출한 기능 설명

작업 순서:
1. `app/api/` 폴더에 있는 모든 `route.ts` 파일 찾기
2. 각 파일에서 export되는 함수 (GET, POST, PATCH, DELETE 등) 확인
3. 함수 위의 주석에서 설명 추출 (예: `/** GET /api/users - 사용자 목록 조회 */`)
4. 경로와 함께 정렬된 테이블 형식으로 표시

추가 정보:
- 동적 라우트는 [id] 형태로 표시 (예: /api/users/[id])
- 설명이 없는 경우 "API endpoint"로 표시
- 경로 기준으로 정렬
