# AI-PEL Lab Website Redesign - Dark Multipage Version

AI-PEL(Advanced & Intelligent Power Electronics Lab) 연구실 사이트를 바탕으로 제작한 과제용 정적 웹사이트입니다.  
이번 버전은 전체적으로 어두운 다크 테마를 적용했고, 기존 한 페이지 섹션 구조를 실제 여러 HTML 페이지 구조로 변경했습니다.

## 프로젝트 개요

이 웹사이트는 연구실에 관심 있는 학생, 지원자, 외부 연구자가 AI-PEL의 연구 분야, 프로젝트, 구성원, 논문, 연락처 정보를 쉽게 탐색할 수 있도록 만든 연구실 정보 탐색 서비스입니다.

## 주요 변경 사항

- 전체 디자인을 다크 테마로 변경
- `Home`, `Research`, `Projects`, `Members`, `Publications`, `Contact`를 각각 별도 HTML 페이지로 분리
- 상단 메뉴 클릭 시 같은 페이지 내 스크롤이 아니라 별도 페이지로 이동
- 현재 보고 있는 페이지가 네비게이션에서 강조되도록 구성
- 모바일 메뉴 기능 유지
- 프로젝트 필터링 기능 유지
- 논문 카테고리 탭 기능 유지
- 관심 분야 선택 후 연구 방향 추천 기능 유지

## 파일 구조

```text
.
├── index.html
├── research.html
├── projects.html
├── members.html
├── publications.html
├── contact.html
├── style.css
├── script.js
└── README.md
```

## 사용 기술

- HTML5
- CSS3
- JavaScript
- Vercel static deployment

## 로컬 실행 방법

1. 이 폴더를 다운로드하거나 GitHub에 업로드합니다.
2. `index.html` 파일을 브라우저에서 엽니다.
3. 상단 메뉴의 `Home`, `Research`, `Projects`, `Members`, `Publications`, `Contact`를 눌러 각 페이지로 이동합니다.
4. 더 편하게 확인하려면 VS Code의 Live Server 확장 프로그램으로 실행합니다.

## JavaScript 인터랙션

- `projects.html`: 프로젝트 카테고리 필터링
- `publications.html`: 논문 분야별 탭 필터링
- `contact.html`: 관심 분야 선택 후 연구 방향 추천 결과 표시
- 모든 페이지: 모바일 네비게이션 메뉴 열기/닫기

## Vercel 배포 방법

1. GitHub에 이 프로젝트 폴더 전체를 업로드합니다.
2. Vercel에서 `Add New Project`를 클릭합니다.
3. GitHub Repository를 선택합니다.
4. Framework Preset은 `Other` 또는 자동 설정을 사용합니다.
5. Build Command와 Output Directory는 비워두어도 됩니다.
6. Deploy를 클릭합니다.

## Deployment URL

배포 후 여기에 Vercel 주소를 작성하세요.

[```text
https://your-project-name.vercel.app
```](https://aassignment4-lab-website.vercel.app)

## 참고

본 프로젝트는 AI-PEL Google Sites의 공개 정보 구조를 참고해 과제용으로 재구성한 웹사이트입니다.
