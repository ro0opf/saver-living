# GitHub에 푸시하고 배포하기

## 순서대로 따라하세요!

### 1단계: GitHub에서 저장소 생성

1. 브라우저에서 https://github.com 접속
2. 로그인 후 우측 상단 `+` 버튼 클릭
3. `New repository` 선택
4. 다음과 같이 입력:
   - **Repository name**: `saver-living`
   - **Description**: `Profile link page with React + TypeScript + Tailwind`
   - **Public** 체크 (중요!)
   - **README 추가 안 함**, **.gitignore 추가 안 함**, **라이선스 선택 안 함**
5. `Create repository` 버튼 클릭

### 2단계: 터미널에서 명령어 실행

저장소를 생성하면 GitHub가 보여주는 페이지에서 본인의 username을 확인하세요.

**PowerShell 또는 CMD**를 열고 다음 명령어를 실행:

```bash
cd "c:\Users\ro0op\Documents\GitHub\saver-living-react"

# YOUR_USERNAME을 본인의 GitHub 사용자명으로 변경!
git remote add origin https://github.com/YOUR_USERNAME/saver-living.git

# main 브랜치로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

**중요**: `YOUR_USERNAME` 부분을 본인의 실제 GitHub 사용자명으로 꼭 변경하세요!

예시:
```bash
# 만약 사용자명이 'johndoe'라면:
git remote add origin https://github.com/johndoe/saver-living.git
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. 상단 메뉴에서 `Settings` 클릭
3. 왼쪽 사이드바에서 `Pages` 클릭
4. **Build and deployment** 섹션에서:
   - **Source**: `GitHub Actions` 선택
5. 페이지를 새로고침하면 배포가 자동으로 시작됩니다!

### 4단계: 배포 확인

1. 저장소의 `Actions` 탭 클릭
2. 배포 워크플로우 진행 상황 확인 (약 1-2분 소요)
3. 완료되면 다음 주소로 접속:
   ```
   https://YOUR_USERNAME.github.io/saver-living/
   ```

---

## 문제 해결

### "Permission denied" 에러
- GitHub 계정에 로그인되어 있는지 확인
- Personal Access Token이 필요할 수 있습니다

### "Repository not found" 에러
- 저장소 이름과 URL이 정확한지 확인
- Public 저장소로 생성했는지 확인

### 배포 후 404 에러
- GitHub Pages 설정이 올바른지 확인
- Actions 탭에서 에러 로그 확인
- 5-10분 정도 기다려보세요 (첫 배포는 시간이 걸릴 수 있습니다)

---

## 빠른 명령어 복사

아래 명령어를 복사해서 사용하세요 (YOUR_USERNAME 변경 필수!):

```bash
cd "c:\Users\ro0op\Documents\GitHub\saver-living-react"
git remote add origin https://github.com/YOUR_USERNAME/saver-living.git
git branch -M main
git push -u origin main
```

---

## 완료 후 확인사항

✅ GitHub 저장소에 코드가 업로드되었는가?
✅ Actions 탭에서 배포가 성공했는가?
✅ Settings > Pages에서 배포 URL이 표시되는가?
✅ 배포된 사이트가 정상적으로 작동하는가?

모두 완료되었다면 성공입니다! 🎉
