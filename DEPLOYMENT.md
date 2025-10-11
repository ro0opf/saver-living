# GitHub Pages 배포 가이드

이 프로젝트를 GitHub Pages에 배포하는 방법입니다.

## 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단의 `+` 버튼 클릭 → `New repository` 선택
3. Repository 정보 입력:
   - **Repository name**: `saver-living`
   - **Description**: Profile link page with React + TypeScript + Tailwind
   - **Public** 선택 (GitHub Pages는 Public 저장소 필요)
   - **Initialize this repository with** 옵션들은 모두 체크 해제
4. `Create repository` 버튼 클릭

## 2단계: 로컬 저장소와 연결

터미널에서 다음 명령어 실행:

```bash
cd "c:\Users\ro0op\Documents\GitHub\saver-living-react"
git remote add origin https://github.com/YOUR_USERNAME/saver-living.git
git branch -M main
git push -u origin main
```

**주의**: `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요!

## 3단계: GitHub Pages 설정

1. GitHub 저장소 페이지에서 `Settings` 탭 클릭
2. 왼쪽 사이드바에서 `Pages` 클릭
3. **Source** 섹션에서:
   - Source: `GitHub Actions` 선택
4. 자동으로 배포가 시작됩니다!

## 4단계: 배포 확인

1. `Actions` 탭에서 배포 진행 상황 확인
2. 배포 완료 후 사이트 주소: `https://YOUR_USERNAME.github.io/saver-living/`

---

## 자동 배포

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다!

```bash
# 변경 사항 커밋 & 푸시
git add .
git commit -m "Update content"
git push
```

## 로컬에서 테스트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm run preview
```

## 문제 해결

### 빌드 실패 시
- Actions 탭에서 에러 로그 확인
- Node.js 버전 문제: `.github/workflows/deploy.yml`에서 Node 버전 확인

### 404 에러
- `vite.config.ts`의 `base` 경로가 저장소 이름과 일치하는지 확인
- 현재 설정: `base: '/saver-living/'`

### 스타일이 깨질 때
- 빌드 다시 실행: `npm run build`
- Tailwind CSS 설정 확인: `tailwind.config.js`

---

Made with ❤️ by Claude Code
