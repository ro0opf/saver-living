# Profile Link Page

React + TypeScript + Tailwind CSS로 만든 모던한 프로필 링크 모음 페이지입니다.

## 주요 기능

- ⚛️ **React 18** + **TypeScript**
- 🎨 **Tailwind CSS** - 유틸리티 우선 스타일링
- 📱 **완전한 반응형** - 모바일, 태블릿, 데스크톱
- 🌙 **다크모드** - 자동/수동 전환
- ✨ **부드러운 애니메이션** - Fade-in, Hover 효과
- 📤 **공유 기능** - Web Share API + 클립보드
- 🎭 **프로필 커스터마이징** - 이미지 변경 및 로컬 저장
- 🚀 **GitHub Actions** - 자동 배포

## 기술 스택

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 시작하기

### 필요 조건

- Node.js 20.19+ 또는 22.12+
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
saver-living-react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 워크플로우
├── src/
│   ├── components/
│   │   ├── DarkModeToggle.tsx  # 다크모드 토글 버튼
│   │   ├── LinkCard.tsx        # 링크 카드 컴포넌트
│   │   ├── Profile.tsx         # 프로필 섹션
│   │   └── ShareButton.tsx     # 공유 버튼
│   ├── data/
│   │   └── links.tsx           # 링크 데이터 및 프로필 정보
│   ├── types/
│   │   └── index.ts            # TypeScript 타입 정의
│   ├── App.tsx                 # 메인 앱 컴포넌트
│   ├── index.css               # 글로벌 스타일 & 애니메이션
│   └── main.tsx                # 엔트리 포인트
├── tailwind.config.js          # Tailwind 설정
├── vite.config.ts              # Vite 설정
└── package.json
```

## 커스터마이징

### 1. 프로필 정보 변경

`src/data/links.tsx`를 수정하세요:

```typescript
export const profileData: ProfileData = {
  name: '당신의 이름',
  description: '당신의 소개',
  imageUrl: '프로필 이미지 URL',
};
```

### 2. 링크 추가/수정

`src/data/links.tsx`의 `links` 배열을 수정:

```typescript
export const links: LinkItem[] = [
  {
    id: '1',
    title: '링크 제목',
    url: 'https://your-url.com',
    type: 'website',
    icon: (/* SVG 아이콘 */),
  },
  // ... 더 많은 링크
];
```

### 3. 색상 테마 변경

`tailwind.config.js`에서 색상 커스터마이징:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#ff5b1a',
      secondary: '#647bff',
    },
  },
},
```

### 4. 배경 그라디언트 변경

`src/App.tsx`의 `bg-gradient-to-br` 클래스 수정

## 배포

자세한 배포 가이드는 `DEPLOYMENT.md`를 참조하세요.

### 간단 요약

1. GitHub에서 새 저장소 생성
2. 로컬 저장소와 연결:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/saver-living.git
   git push -u origin main
   ```
3. GitHub 저장소 Settings → Pages → Source: "GitHub Actions" 선택
4. 자동 배포 완료!

배포된 사이트: `https://YOUR_USERNAME.github.io/saver-living/`

## 주요 기능 설명

### 다크모드
- 우측 상단 버튼으로 토글
- 시스템 설정 자동 감지
- localStorage에 설정 저장

### 링크 카드
- 6개의 소셜 미디어 타입 지원
- 각 타입별 브랜드 컬러
- 호버 시 애니메이션 효과

### 공유 기능
- Web Share API 지원 (모바일)
- 클립보드 복사 fallback (데스크톱)
- 토스트 알림

### 프로필 이미지
- 클릭하여 URL로 변경 가능
- localStorage에 자동 저장

## 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px - 1023px
- **데스크톱**: ≥ 1024px

## 브라우저 지원

- Chrome/Edge (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- 모바일 브라우저

## 라이선스

MIT License - 자유롭게 사용하세요!

## 기여

이슈와 PR을 환영합니다!

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
