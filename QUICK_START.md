# 빠른 시작 가이드

## 프로젝트 완료! 🎉

React + TypeScript + Tailwind CSS로 만든 프로필 링크 페이지가 완성되었습니다.

## 📁 프로젝트 위치

```
c:\Users\ro0op\Documents\GitHub\saver-living-react
```

## 🚀 다음 단계

### 1. GitHub에 업로드하고 배포하기

**[GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)** 파일을 열어서 단계별로 따라하세요!

간단 요약:
1. GitHub에서 새 저장소 생성 (이름: `saver-living`)
2. 터미널에서 명령어 실행:
   ```bash
   cd "c:\Users\ro0op\Documents\GitHub\saver-living-react"
   git remote add origin https://github.com/YOUR_USERNAME/saver-living.git
   git branch -M main
   git push -u origin main
   ```
3. GitHub Settings → Pages → Source: "GitHub Actions"
4. 완료! 사이트 주소: `https://YOUR_USERNAME.github.io/saver-living/`

### 2. 로컬에서 확인하기

빌드된 파일이 이미 있습니다! 브라우저에서 열어보세요:
```
c:\Users\ro0op\Documents\GitHub\saver-living-react\dist\index.html
```

**참고**: 로컬에서는 일부 기능(예: 라우팅)이 제한될 수 있습니다.
개발 서버를 실행하려면 Node.js를 20.19+ 또는 22.12+로 업그레이드해야 합니다.

## 📝 커스터마이징

### 프로필 정보 변경
`src/data/links.tsx` 파일 수정

### 링크 수정
`src/data/links.tsx`의 links 배열 수정

### 색상 변경
`tailwind.config.js` 파일 수정

자세한 내용은 **[README.md](README.md)** 참조!

## 📚 문서

- **[README.md](README.md)** - 프로젝트 전체 설명
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - 상세 배포 가이드
- **[GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)** - GitHub 푸시 단계별 가이드

## ✨ 주요 기능

- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS
- 📱 완전 반응형 (모바일/태블릿/PC)
- 🌙 다크모드
- ✨ 애니메이션
- 📤 공유 기능
- 🚀 자동 배포 (GitHub Actions)

## 🔧 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Node.js 20.19+ 필요)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🎯 완료 체크리스트

- [x] React + TypeScript 프로젝트 생성
- [x] Tailwind CSS 설정
- [x] 컴포넌트 작성
- [x] 반응형 디자인 구현
- [x] 빌드 성공
- [x] Git 저장소 초기화
- [x] GitHub Actions 워크플로우 설정
- [ ] GitHub에 푸시 (다음 단계!)
- [ ] GitHub Pages 배포 확인

## 💡 팁

1. **내용 수정 후 다시 배포**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
   자동으로 배포됩니다!

2. **로컬에서 테스트**
   - 코드 수정 후 `npm run build` 실행
   - `dist/index.html` 파일로 결과 확인

3. **Node.js 업그레이드**
   - https://nodejs.org 에서 최신 LTS 버전 다운로드
   - 개발 서버 실행 가능

## 🆘 도움이 필요하면

- README.md의 "문제 해결" 섹션 참조
- DEPLOYMENT.md의 "문제 해결" 섹션 참조
- GitHub Issues 탭에서 질문

---

**다음 단계**: [GITHUB_PUSH_GUIDE.md](GITHUB_PUSH_GUIDE.md)를 열어서 배포를 시작하세요! 🚀
