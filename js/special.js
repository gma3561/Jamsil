// special.js

document.addEventListener('DOMContentLoaded', function() {
    // 평면 타입 탭 기능
    const navTabs = document.querySelectorAll('.nav-tab');
    const floorplanSections = document.querySelectorAll('.floorplan-section');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetType = this.getAttribute('data-type');
            
            // 모든 탭에서 active 클래스 제거
            navTabs.forEach(t => t.classList.remove('active'));
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 섹션 숨기기
            floorplanSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 해당 섹션 보이기
            const targetSection = document.getElementById(`type-${targetType}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // URL 해시 업데이트 (뒤로가기 지원)
            history.pushState(null, null, `#type-${targetType}`);
        });
    });
    
    // 페이지 로드시 URL 해시 확인
    function checkHash() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#type-')) {
            const type = hash.replace('#type-', '');
            const targetTab = document.querySelector(`[data-type="${type}"]`);
            const targetSection = document.getElementById(`type-${type}`);
            
            if (targetTab && targetSection) {
                // 모든 탭/섹션 초기화
                navTabs.forEach(t => t.classList.remove('active'));
                floorplanSections.forEach(s => s.classList.remove('active'));
                
                // 해당 탭/섹션 활성화
                targetTab.classList.add('active');
                targetSection.classList.add('active');
            }
        }
    }
    
    // 페이지 로드시 해시 체크
    checkHash();
    
    // 뒤로가기/앞으로가기 버튼 지원
    window.addEventListener('popstate', checkHash);
    
    // 평면도 확대 모달 기능
    const zoomBtns = document.querySelectorAll('.zoom-btn');
    const modal = document.getElementById('floorplanModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalClose = modal.querySelector('.modal-close');
    
    zoomBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImage.src = imageSrc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
        });
    });
    
    // 모달 닫기 기능
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
    
    modalClose.addEventListener('click', closeModal);
    
    // 모달 배경 클릭시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animatedElements = document.querySelectorAll('.floorplan-content, .info-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 평면도 이미지 지연 로딩
    const lazyImages = document.querySelectorAll('.floorplan-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            // 이미지 로딩 상태 표시
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            imageObserver.observe(img);
        });
    }
    
    // 부드러운 스크롤 (탭 클릭시 해당 섹션으로)
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            setTimeout(() => {
                const targetType = this.getAttribute('data-type');
                const targetSection = document.getElementById(`type-${targetType}`);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const navHeight = document.querySelector('.floorplan-nav').offsetHeight;
                    const offsetTop = targetSection.offsetTop - headerHeight - navHeight - 20;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        });
    });
    
    // 가격 정보 애니메이션
    const priceElements = document.querySelectorAll('.price-amount');
    
    priceElements.forEach(price => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'priceHighlight 1s ease-in-out';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(price);
    });
    
    // CSS 애니메이션 정의 (동적으로 추가)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes priceHighlight {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); color: var(--accent-color); }
            100% { transform: scale(1); }
        }
        
        .floorplan-image:hover {
            transform: scale(1.02);
            transition: transform 0.3s ease;
        }
        
        .info-section:hover .info-title::before {
            height: 30px;
            transition: height 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});