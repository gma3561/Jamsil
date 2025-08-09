// main.js

document.addEventListener('DOMContentLoaded', function() {
    // 유튜브 비디오 자동재생 최적화
    const mainVideo = document.getElementById('main-video');
    
    if (mainVideo) {
        // 페이지 로드 후 비디오가 잘 재생되도록 처리
        setTimeout(() => {
            // iframe 새로고침으로 자동재생 확실히 실행
            const src = mainVideo.src;
            mainVideo.src = '';
            mainVideo.src = src;
        }, 1000);
    }
    
    // 메인 비주얼 패럴랙스 효과
    const mainVisual = document.querySelector('.main-visual');
    const mainVisualContent = document.querySelector('.main-visual-content');
    
    if(mainVisual && mainVisualContent) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const opacity = 1 - (scrollY * 0.003);
            const translateY = scrollY * 0.4;
            
            mainVisualContent.style.opacity = opacity > 0 ? opacity : 0;
            mainVisualContent.style.transform = `translateY(${translateY}px)`;
        });
    }
    
    // 서비스 아이템 애니메이션
    const serviceItems = document.querySelectorAll('.service-item');
    
    if(serviceItems.length > 0) {
        serviceItems.forEach((item, index) => {
            item.classList.add('animated');
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    }
    
    // 추천 매물 슬라이더
    // 간단한 슬라이더 기능은 여기에 추가할 수 있습니다.
    // 예: slick, swiper 등의 라이브러리 초기화
    
    // 페이지 내 섹션별 애니메이션 클래스 추가
    const sections = document.querySelectorAll('section');
    
    if(sections.length > 0) {
        sections.forEach(section => {
            const title = section.querySelector('.section-title');
            if(title) {
                title.classList.add('animated');
            }
            
            const content = section.querySelector('.container > *:not(.section-title)');
            if(content) {
                content.classList.add('animated');
            }
        });
    }
    
    // 카운터 애니메이션 (예: 통계 수치 등을 표시하는 경우)
    function animateCounter(el, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            el.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // 카운터 요소가 있다면 애니메이션 적용
    const counters = document.querySelectorAll('.counter');
    
    if(counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const el = entry.target;
                    const end = parseInt(el.getAttribute('data-count'));
                    animateCounter(el, 0, end, 2000);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }
});