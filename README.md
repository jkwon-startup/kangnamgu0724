# 슬라이드 강의안 플랫폼 🎯

현대적인 웹 기반 슬라이드 강의안 플랫폼입니다. Python 3.10과 Flask를 기반으로 구축되었으며, reveal.js를 사용하여 인터랙티브한 슬라이드 프레젠테이션을 제공합니다.

## 주요 기능 ✨

- 📊 **인터랙티브 슬라이드**: reveal.js 기반의 현대적인 슬라이드 프레젠테이션
- 📝 **마크다운 지원**: 쉬운 콘텐츠 작성 및 관리
- 🎨 **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- 🔄 **실시간 업데이트**: 슬라이드 진행 상태 자동 저장
- 📱 **모바일 친화적**: 터치 기반 네비게이션 지원
- 🌐 **웹 배포**: 브라우저에서 바로 접근 가능
- 🎭 **P5.js 애니메이션**: 동적 배경 효과 및 시각적 인터랙션
- 🎯 **전문 교육용 템플릿**: 강남구여성능력개발센터 AI 교육 전용 디자인

## 기술 스택 🛠️

- **백엔드**: Python 3.10, Flask
- **프론트엔드**: HTML5, CSS3, JavaScript (ES6+)
- **슬라이드**: reveal.js 4.3.1
- **스타일링**: Bootstrap 5, CSS Grid/Flexbox
- **애니메이션**: P5.js, CSS3 Animations
- **데이터 형식**: YAML, Markdown
- **폰트**: Noto Sans KR, Font Awesome 6.0.0

## 설치 및 실행 🚀

### 1. 저장소 클론
```bash
git clone <repository-url>
cd kangnamgu0724
```

### 2. Python 가상환경 설정 (권장)
```bash
# Python 3.10 가상환경 생성
python3.10 -m venv venv

# 가상환경 활성화
# macOS/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate
```

### 3. 의존성 설치
```bash
pip install -r requirements.txt
```

### 4. 애플리케이션 실행
```bash
python run.py
```

또는 직접 Flask 실행:
```bash
python app.py
```

### 5. 웹 브라우저에서 접속
```
http://localhost:5000
```

## 프로젝트 구조 📁

```
kangnamgu0724/
├── app/                    # Flask 애플리케이션
│   ├── static/            # 정적 파일 (CSS, JS, 이미지)
│   │   ├── css/
│   │   │   ├── style.css                    # 기본 스타일
│   │   │   └── ai-education-style.css       # AI 교육 전용 스타일
│   │   ├── js/
│   │   │   ├── main.js                      # 기본 JavaScript
│   │   │   └── ai-education-animations.js   # P5.js 애니메이션
│   │   └── images/
│   ├── templates/         # HTML 템플릿
│   │   ├── base.html                        # 기본 레이아웃
│   │   ├── index.html                       # 메인 페이지
│   │   ├── slides_list.html                 # 슬라이드 목록
│   │   ├── slide_viewer.html                # 기본 슬라이드 뷰어
│   │   └── ai_education_slide_viewer.html   # AI 교육 전용 뷰어
│   └── api/              # API 라우트
├── content/              # 강의 콘텐츠
│   ├── slides/           # 슬라이드 데이터 (YAML)
│   │   ├── python-basics.yaml
│   │   ├── web-development.yaml
│   │   └── ai-education-environmental-instructor.yaml  # AI 교육 슬라이드
│   └── assets/           # 미디어 파일
│       ├── images/
│       ├── videos/
│       └── documents/
├── config/               # 설정 파일
├── tests/               # 테스트 파일
├── docs/                # 문서
├── app.py               # 메인 애플리케이션
├── run.py               # 실행 스크립트
├── requirements.txt     # 패키지 의존성
└── pyproject.toml       # 프로젝트 설정
```

## 사용법 📖

### AI 교육 슬라이드 접속

1. 웹 브라우저에서 `http://localhost:5000` 접속
2. 슬라이드 목록에서 **"강남구여성능력개발센터 환경강사 대상 AI 활용 교육"** 선택
3. 1920x1080 해상도에 최적화된 전용 템플릿으로 슬라이드 시청

### 주요 특징

- **16:9 비율 최적화**: 1920x1080 해상도에 맞춤 설계
- **P5.js 애니메이션**: 각 슬라이드 테마에 맞는 동적 배경 효과
- **Awwwards 스타일**: 현대적이고 세련된 디자인
- **상세한 AI 도구 소개**: 프롬프트 예시와 함께 실용적인 활용법 제공
- **인터랙티브 요소**: 호버 효과, 애니메이션, 그라데이션 등

### 새로운 슬라이드 생성

1. `content/slides/` 디렉토리에 새로운 YAML 파일 생성
2. 다음 형식을 따라 슬라이드 작성:

```yaml
title: "강의 제목"
description: "강의 설명"
author: "강사명"
created_at: "2024-01-15"
tags:
  - "태그1"
  - "태그2"

presentation_settings:
  format: "16:9"
  resolution: "1920x1080"
  background_color: "#ffffff"
  font_family: "Noto Sans KR"

slides:
  - title: "슬라이드 제목"
    type: "title"
    content: |
      # 마크다운 형식의 내용
      
      ## 소제목
      - 리스트 항목 1
      - 리스트 항목 2
      
      ```python
      # 코드 예제
      print("Hello, World!")
      ```
    animation: "fade-in"
    background_animation: "particles"
    note: "강사 참고사항"
    
  - title: "두 번째 슬라이드"
    type: "content"
    content: |
      더 많은 내용...
    background_animation: "geometric"
```

### 슬라이드 네비게이션

**키보드 단축키:**
- **화살표 키**: 슬라이드 이동
- **스페이스바**: 다음 슬라이드
- **ESC**: 슬라이드 개요 보기
- **F11**: 전체화면 모드
- **H**: 도움말 토글
- **Ctrl+H**: 홈으로 이동
- **Ctrl+L**: 강의 목록으로 이동

**UI 컨트롤:**
- **네비게이션 바**: 화면 하단 중앙의 버튼들
- **진행률 표시**: 화면 상단의 진행률 바
- **슬라이드 카운터**: 화면 우상단의 현재 슬라이드 번호
- **로딩 스크린**: 슬라이드 로딩 중 표시

## AI 교육 슬라이드 상세 정보 🤖

### 교육 내용

**강남구여성능력개발센터 환경강사 대상 AI 활용 교육**

1. **AI 시대, 강사의 역할과 교육방법의 변화**
   - 환경강사가 AI를 알아야 하는 이유
   - 생성형 AI의 개념과 주요 기술
   - 환경교육에서 생성형 AI의 가능성

2. **환경교육 콘텐츠 제작에 유용한 AI 툴 소개**
   - 콘텐츠 기획 및 아이디어 도출 (ChatGPT, Claude, Perplexity AI)
   - 강의자료 제작 (Gamma, Canva, Beautiful.AI)
   - 이미지 생성 (DALL-E 3, Midjourney, Stable Diffusion)
   - 영상 및 인포그래픽 생성 (Synthesia, Runway ML, Piktochart)

3. **주요 질의응답 및 활용 체크리스트**
   - 자주 묻는 질문들과 답변
   - AI 도구 활용 체크리스트 제공

4. **요약 정리**
   - 도구별 핵심 정리 및 웹사이트 링크 제공

### 기술적 특징

- **1920x1080 해상도 최적화**: 프레젠테이션 환경에 맞춤
- **P5.js 동적 애니메이션**: 18가지 테마별 배경 효과
- **현대적 UI/UX**: Glass morphism, 그라데이션, 호버 효과
- **실용적인 프롬프트**: 실제 사용 가능한 AI 프롬프트 예시 제공
- **인터랙티브 요소**: 카드 호버 효과, 애니메이션 전환

### 애니메이션 효과

- **파티클 시스템**: 기본 배경 효과
- **웨이브 애니메이션**: 흐름과 변화 표현
- **기하학적 패턴**: 기술적 내용 강조
- **자연 테마**: 환경 관련 내용 표현
- **네트워크 노드**: AI 기술 시각화
- **브레인스토밍**: 아이디어 생성 과정 표현

## 개발 환경 🔧

### 개발 모드 실행
```bash
export FLASK_ENV=development
export FLASK_APP=app.py
flask run --debug
```

### 코드 포맷팅
```bash
black .
```

### 타입 검사
```bash
mypy app.py
```

## 배포 🌐

### 운영 환경 설정

1. 환경 변수 설정:
```bash
export FLASK_ENV=production
export SECRET_KEY=your-secret-key
```

2. Gunicorn으로 실행:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Docker 배포 (옵션)

```dockerfile
FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000
CMD ["python", "run.py"]
```

## 기여하기 🤝

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋합니다 (`git commit -am '새 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/새기능`)
5. Pull Request를 생성합니다

## 라이선스 📄

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 지원 및 문의 💬

- 이슈 리포트: GitHub Issues
- 기능 제안: GitHub Discussions
- 이메일: your-email@example.com

---

**Made with ❤️ using Python 3.10**
강남구여성능려개발센터 환경강사 AI 교육
