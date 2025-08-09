# 잠실 래미안 아이파크 웹사이트 디자인 사양서

## 1. 디자인 컨셉

### 1.1 컨셉 정의
- **프리미엄 부동산**: 고급스러운 아파트 브랜드에 맞는 럭셔리한 디자인 언어
- **모던 미니멀리즘**: 깔끔하고 세련된 레이아웃으로 정보 명확성 제공
- **신뢰성과 전문성**: 안정감 있는 시각 요소로 신뢰할 수 있는 브랜드 이미지 전달

### 1.2 디자인 목표
- 사용자 경험 향상을 통한 부동산 정보 접근성 강화
- 프리미엄 이미지 강화로 브랜드 가치 제고
- 다양한 디바이스에서 최적화된 반응형 경험 제공
- 시각적 흥미 요소 강화로 체류 시간 증대

## 2. 색상 시스템

### 2.1 주요 색상 팔레트
```css
:root {
    /* 프라이머리 컬러 */
    --primary-color: #b8a47e; /* 기존 골드 색상 유지 */
    --primary-dark: #9a8965;
    --primary-light: #d5c7a9;
    
    /* 중립 색상 */
    --secondary-color: #1a1a1a;
    --text-color: #0f0f0f;
    --text-light: #525252;
    --text-lighter: #a3a3a3;
    
    /* 배경 색상 */
    --bg-white: #ffffff;
    --bg-light: #fafafa;
    --bg-dark: #1a1a1a;
    --bg-black: #000000;
    
    /* 액센트 색상 */
    --accent-color: #f4f1ea;
}
```

### 2.2 확장 색상 시스템
```css
:root {
    /* 프라이머리 컬러 확장 스케일 */
    --primary-50: #faf9f7;
    --primary-100: #f1ede4;
    --primary-200: #e5dcc7;
    --primary-300: #d6c7a1;
    --primary-400: #c8b388;
    --primary-500: #b8a47e; /* 기존 primary */
    --primary-600: #9a8965;
    --primary-700: #7d6f4f;
    --primary-800: #62553c;
    --primary-900: #4a4029;
    
    /* 상태 표시 색상 */
    --success: #22c55e;
    --warning: #f59e0b;
    --error: #ef4444;
    --info: #3b82f6;
}
```

### 2.3 그라디언트
```css
/* 럭셔리 그라디언트 */
.luxury-gradient {
    background: linear-gradient(
        135deg,
        #b8a47e 0%,
        #d4af37 25%,
        #b8a47e 50%,
        #8b7355 75%,
        #b8a47e 100%
    );
}

/* 헤더 배경 그라디언트 */
.header-gradient {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(0, 0, 0, 0) 100%
    );
}
```

## 3. 타이포그래피

### 3.1 폰트 패밀리
```css
:root {
    /* 폰트 패밀리 */
    --font-korean: 'SUIT', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    --font-english: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    --font-display: 'Playfair Display', 'Cormorant Garamond', 'Times New Roman', serif;
    --font-premium: 'Cormorant Garamond', 'Playfair Display', 'Georgia', serif;
}
```

### 3.2 사이즈 시스템
```css
:root {
    /* 폰트 사이즈 - 반응형 */
    --font-xs: clamp(12px, 0.75vw, 14px);
    --font-sm: clamp(14px, 0.875vw, 16px);
    --font-md: clamp(16px, 1vw, 18px);
    --font-lg: clamp(18px, 1.125vw, 20px);
    --font-xl: clamp(24px, 1.5vw, 28px);
    --font-xxl: clamp(32px, 2vw, 40px);
    --font-title: clamp(48px, 3vw, 56px);
    --font-display: clamp(56px, 4vw, 72px);
}
```

### 3.3 타이포그래피 스타일
```css
/* 프리미엄 제목 스타일 */
.premium-heading {
    font-family: var(--font-display);
    font-weight: 300;
    letter-spacing: 0.05em;
    line-height: 1.2;
}

/* 본문 텍스트 스타일 */
.body-text {
    font-family: var(--font-korean);
    font-size: var(--font-md);
    line-height: 1.7;
    letter-spacing: -0.02em;
    word-break: keep-all;
}

/* 소제목 스타일 */
.subtitle {
    font-family: var(--font-english);
    font-size: var(--font-sm);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-lighter);
}
```

## 4. 레이아웃 시스템

### 4.1 그리드 시스템
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
}

/* 기본 그리드 */
.grid {
    display: grid;
    gap: var(--space-lg);
}

/* 컬럼 개수별 그리드 */
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); }

/* 비대칭 그리드 */
.grid-3-2 { grid-template-columns: 3fr 2fr; }
.grid-2-3 { grid-template-columns: 2fr 3fr; }
```

### 4.2 간격 시스템
```css
:root {
    /* 여백 변수 - 모든 간격의 기준 */
    --space-unit: 4px;
    
    /* 여백 - 명확한 정의 */
    --space-xs: calc(var(--space-unit) * 1);    /* 4px */
    --space-sm: calc(var(--space-unit) * 2);    /* 8px */
    --space-md: calc(var(--space-unit) * 4);    /* 16px */
    --space-lg: calc(var(--space-unit) * 6);    /* 24px */
    --space-xl: calc(var(--space-unit) * 8);    /* 32px */
    --space-2xl: calc(var(--space-unit) * 12);  /* 48px */
    --space-3xl: calc(var(--space-unit) * 16);  /* 64px */
    --space-4xl: calc(var(--space-unit) * 20);  /* 80px */
    --space-5xl: calc(var(--space-unit) * 24);  /* 96px */
}
```

### 4.3 섹션 레이아웃
```css
/* 기본 섹션 */
.section {
    padding: var(--space-4xl) 0;
}

/* 풀스크린 섹션 */
.section-fullscreen {
    min-height: 100vh;
    display: flex;
    align-items: center;
}

/* 오프셋 섹션 */
.section-offset {
    margin-top: -80px; /* 헤더 높이만큼 상단 마진 */
    padding-top: 80px;
}
```

## 5. 컴포넌트 디자인

### 5.1 버튼 시스템
```css
/* 기본 버튼 */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-size: var(--font-md);
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
}

/* 프라이머리 버튼 */
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: var(--bg-white);
    box-shadow: var(--shadow-md);
}

/* 세컨더리 버튼 */
.btn-secondary {
    background: transparent;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
}

/* 라운드 버튼 */
.btn-round {
    border-radius: 50px;
    padding: 14px 28px;
}

/* 큰 버튼 */
.btn-large {
    padding: 16px 32px;
    font-size: var(--font-lg);
}
```

### 5.2 카드 컴포넌트
```css
/* 기본 카드 */
.card {
    background: var(--bg-white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

/* 카드 내부 콘텐츠 */
.card-content {
    padding: var(--space-xl);
}

/* 유리 효과 카드 */
.card-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 5.3 폼 요소
```css
/* 인풋 필드 */
.input-field {
    display: block;
    width: 100%;
    padding: 12px 16px;
    font-size: var(--font-md);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--bg-white);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(184, 164, 126, 0.2);
    outline: none;
}

/* 폼 그룹 */
.form-group {
    margin-bottom: var(--space-md);
}

.form-label {
    display: block;
    margin-bottom: var(--space-sm);
    font-size: var(--font-sm);
    font-weight: 500;
    color: var(--text-color);
}
```

## 6. 반응형 디자인

### 6.1 브레이크포인트
```css
:root {
    /* 반응형 브레이크포인트 */
    --breakpoint-sm: 576px;   /* 모바일 가로 */
    --breakpoint-md: 768px;   /* 태블릿 */
    --breakpoint-lg: 992px;   /* 작은 데스크톱 */
    --breakpoint-xl: 1200px;  /* 일반 데스크톱 */
    --breakpoint-2xl: 1400px; /* 대형 디스플레이 */
}
```

### 6.2 미디어 쿼리 템플릿
```css
/* 모바일 퍼스트 접근 - 기본이 모바일 스타일 */

/* 태블릿 이상 (768px+) */
@media (min-width: 768px) {
    /* 태블릿 스타일 */
}

/* 데스크톱 이상 (992px+) */
@media (min-width: 992px) {
    /* 데스크톱 스타일 */
}

/* 대형 데스크톱 (1200px+) */
@media (min-width: 1200px) {
    /* 대형 스크린 스타일 */
}
```

### 6.3 모바일 최적화
```css
/* 모바일 내비게이션 */
.mobile-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid var(--border-light);
    z-index: 1000;
}

/* 터치 타겟 */
.touch-target {
    min-height: 44px;
    min-width: 44px;
}

/* 데스크톱에서 모바일 요소 숨기기 */
@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}

/* 모바일에서 데스크톱 요소 숨기기 */
@media (max-width: 767px) {
    .desktop-only {
        display: none;
    }
}
```

## 7. 애니메이션 및 트랜지션

### 7.1 기본 트랜지션
```css
:root {
    /* 트랜지션 프리셋 */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* 특수 이징 효과 */
    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### 7.2 애니메이션
```css
/* 페이드인 애니메이션 */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn var(--transition-base) forwards;
}

/* 슬라이드업 애니메이션 */
@keyframes slideUp {
    from { 
        transform: translateY(20px);
        opacity: 0;
    }
    to { 
        transform: translateY(0);
        opacity: 1;
    }
}

.slide-up {
    animation: slideUp var(--transition-base) forwards;
}

/* 럭셔리 시머 효과 */
@keyframes luxuryShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.luxury-shimmer {
    background-size: 200% 200%;
    animation: luxuryShimmer 4s var(--ease-smooth) infinite;
}
```

### 7.3 인터랙션 패턴
```css
/* 호버 효과 */
.hover-lift {
    transition: transform var(--transition-base);
}

.hover-lift:hover {
    transform: translateY(-5px);
}

/* 포커스 효과 */
.focus-ring {
    transition: box-shadow var(--transition-fast);
}

.focus-ring:focus {
    box-shadow: 0 0 0 3px rgba(184, 164, 126, 0.4);
    outline: none;
}

/* 클릭 효과 */
.click-scale {
    transition: transform var(--transition-fast);
}

.click-scale:active {
    transform: scale(0.97);
}
```

## 8. 이미지 및 아이콘

### 8.1 이미지 스타일
```css
/* 기본 이미지 */
.img-responsive {
    max-width: 100%;
    height: auto;
    display: block;
}

/* 원형 이미지 */
.img-circle {
    border-radius: 50%;
    object-fit: cover;
}

/* 이미지 오버레이 */
.img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.8) 100%
    );
}
```

### 8.2 아이콘 시스템
```css
/* 럭셔리 아이콘 */
.luxury-icon {
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* 아이콘 사이즈 */
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

## 9. 유틸리티 클래스

### 9.1 스페이싱 유틸리티
```css
/* 마진 유틸리티 */
.mt-0 { margin-top: 0; }
.mt-1 { margin-top: var(--space-xs); }
.mt-2 { margin-top: var(--space-sm); }
.mt-3 { margin-top: var(--space-md); }
.mt-4 { margin-top: var(--space-lg); }
.mt-5 { margin-top: var(--space-xl); }
.mt-6 { margin-top: var(--space-2xl); }
.mt-7 { margin-top: var(--space-3xl); }
.mt-8 { margin-top: var(--space-4xl); }

/* 패딩 유틸리티 (위와 유사한 패턴으로 구현) */
```

### 9.2 텍스트 유틸리티
```css
/* 텍스트 정렬 */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* 텍스트 스타일 */
.text-bold { font-weight: 700; }
.text-medium { font-weight: 500; }
.text-light { font-weight: 300; }
.text-italic { font-style: italic; }

/* 텍스트 색상 */
.text-primary { color: var(--primary-color); }
.text-secondary { color: var(--secondary-color); }
.text-muted { color: var(--text-light); }
.text-white { color: var(--bg-white); }
```

### 9.3 레이아웃 유틸리티
```css
/* 플렉스 */
.d-flex { display: flex; }
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
.flex-wrap { flex-wrap: wrap; }

/* 포지션 */
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.position-fixed { position: fixed; }

/* 디스플레이 */
.d-none { display: none; }
.d-block { display: block; }
.d-inline-block { display: inline-block; }

/* 레이아웃 */
.full-width { width: 100%; }
.full-height { height: 100%; }
```

## 10. 접근성 가이드라인

### 10.1 접근성 원칙
- 명확한 색상 대비: 텍스트와 배경 간 WCAG 2.1 AA 기준 준수 (4.5:1 이상)
- 키보드 접근성: 모든 인터랙티브 요소는 키보드로 접근 및 조작 가능
- 스크린 리더 지원: 모든 이미지에 대체 텍스트 제공
- 적절한 텍스트 크기: 최소 14px 이상의 텍스트 크기 사용

### 10.2 접근성 CSS
```css
/* 스킵 네비게이션 */
.skip-nav {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 8px 16px;
    background-color: var(--primary-color);
    color: var(--bg-white);
    z-index: 9999;
    transition: top 0.3s ease;
}

.skip-nav:focus {
    top: 0;
}

/* 포커스 가시성 */
*:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```

## 11. 성능 최적화

### 11.1 CSS 최적화 전략
- Critical CSS 인라인화: 초기 렌더링에 필요한 CSS를 HTML에 인라인으로 포함
- CSS 번들링: 중복 코드 제거 및 최소화
- 미사용 CSS 제거: PurgeCSS 등을 활용한 불필요한 코드 제거
- CSS 파일 압축: 공백 및 주석 제거로 파일 크기 최소화

### 11.2 미디어 최적화
- 이미지 포맷: WebP 형식 우선 사용
- 이미지 사이즈: 적절한 크기로 리사이징
- 이미지 압축: 품질 85% 수준에서 최적화
- 이미지 지연 로딩: `loading="lazy"` 속성 사용

## 12. 실행 계획

### 12.1 우선순위
1. 브랜딩 요소 강화: 로고, 색상 시스템, 타이포그래피 정립
2. 레이아웃 개선: 히어로 섹션, 정보 구조 최적화
3. 반응형 개선: 모바일 사용성 강화
4. 애니메이션 적용: 시각적 흥미 요소 추가
5. 접근성 강화: 색상 대비, 키보드 내비게이션 개선

### 12.2 단계별 구현
- **1단계**: 디자인 시스템 설정 (색상, 타이포그래피, 간격 등)
- **2단계**: 핵심 컴포넌트 개발 (버튼, 카드, 폼 요소 등)
- **3단계**: 메인 페이지 개선 (히어로 섹션, 프로젝트 정보 섹션 등)
- **4단계**: 서브 페이지 개발 (단지 정보, 평면도 등)
- **5단계**: 마이크로 인터랙션 및 애니메이션 추가
- **6단계**: 테스트 및 최적화 (성능, 접근성, 크로스 브라우저 호환성)