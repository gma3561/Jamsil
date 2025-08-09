// common.js

document.addEventListener('DOMContentLoaded', function() {
    // 터치 장치 지원 여부 확인
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    
    // 브라우저 감지 및 호환성 처리
    const ua = navigator.userAgent.toLowerCase();
    const isIE = ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1;
    const isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    // IE 일 경우 호환성 처리
    if (isIE) {
        document.body.classList.add('is-ie');
        // 블러 효과 제거
        const header = document.querySelector('.header');
        if (header) {
            header.style.backdropFilter = 'none';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    }
    
    // iOS Safari 호환성 처리
    if (isIOS && isSafari) {
        document.body.classList.add('is-ios-safari');
    }
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const gnb = document.querySelector('.gnb');
    
    // 메뉴 초기화 함수
    function setupMobileMenu() {
        // 접근성 개선: ARIA 속성 업데이트
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        // 드롭다운 메뉴를 위한 토글 기능 추가
        const dropdownLinks = document.querySelectorAll('.dropdown > .gnb-link');
        
        dropdownLinks.forEach(link => {
            // 모바일에서만 클릭 이벤트 추가 (데스크톱에서는 hover로 처리)
            link.addEventListener('click', function(e) {
                // 모바일 환경에서만 클릭 이벤트 처리
                if (window.innerWidth <= 768 && gnb.classList.contains('active')) {
                    e.preventDefault();
                    const dropdownMenu = this.nextElementSibling;
                    
                    // 토글 현재 메뉴의 클래스
                    dropdownMenu.classList.toggle('show');
                    
                    // 다른 메뉴는 닫기
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.classList.remove('show');
                        }
                    });
                }
            });
        });
        
        // 드롭다운 메뉴 항목에 클릭 이벤트 추가
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // 이벤트 전파 중지하지 않음 - 링크 작동하도록 함
            });
        });
    }
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            gnb.classList.toggle('active');
            
            // 접근성 개선: ARIA 속성 업데이트
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            
            // 모바일 메뉴 버튼 애니메이션
            const bars = this.querySelectorAll('.bar');
            if(this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                
                // 메뉴가 열릴 때 드롭다운 메뉴 초기화
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // 페이지 로드 시 모바일 메뉴 초기화
    setupMobileMenu();
    
    // 윈도우 크기가 변경될 때 모바일 메뉴 상태 재설정
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = '';
            });
        }
    });
    
    // 스크롤시 헤더 스타일 변경
    const header = document.querySelector('.header');
    
    if(header) {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // 문의 폼 제출
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = {
                name: contactForm.querySelector('#name').value,
                phone: contactForm.querySelector('#phone').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value,
                privacy: contactForm.querySelector('#privacy').checked
            };
            
            // 여기에 폼 제출 로직 추가
            // 예: 서버에 데이터 전송, 이메일 발송 등
            console.log('Form submitted:', formData);
            
            // 폼 제출 성공 메시지
            alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            
            // 폼 초기화
            contactForm.reset();
        });
    }
    
    // 뉴스레터 구독 폼
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if(email) {
                // 여기에 구독 로직 추가
                console.log('Newsletter subscription:', email);
                
                // 성공 메시지
                alert('뉴스레터 구독이 완료되었습니다. 감사합니다!');
                
                // 폼 초기화
                this.reset();
            }
        });
    }
    
    // 스크롤 애니메이션
    const animatedElements = document.querySelectorAll('.animated');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if(elementTop < triggerBottom) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // 페이지 로드시 초기 체크
    if(animatedElements.length > 0) {
        checkScroll();
        window.addEventListener('scroll', checkScroll);
    }
    
    // 새로운 스크롤 애니메이션
    function handleScrollAnimations() {
        // 모바일에서 애니메이션 최적화
        const isMobile = window.innerWidth <= 768;
        const elements = document.querySelectorAll('.animate-on-scroll');
        const triggerPosition = window.innerHeight * (isMobile ? 0.9 : 0.85);
        
        // 성능 최적화를 위한 requestAnimationFrame 사용
        requestAnimationFrame(() => {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < triggerPosition) {
                    // 모바일에서는 지연없이 즉시 표시
                    if (isMobile && !element.classList.contains('visible')) {
                        element.style.transitionDelay = '0s';
                    }
                    element.classList.add('visible');
                }
            });
        });
    }
    
    // 모든 section에 animate-on-scroll 클래스 추가
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('animate-on-scroll')) {
            section.classList.add('animate-on-scroll');
        }
    });
    
    // 추가 애니메이션 요소에 클래스 추가
    document.querySelectorAll('.about-content, .ceo-image, .ceo-content, .footer-info, .footer-links, .footer-newsletter').forEach(element => {
        if (!element.classList.contains('animate-on-scroll')) {
            element.classList.add('animate-on-scroll');
        }
    });
    
    // 초기 로드 및 스크롤 이벤트에 애니메이션 핸들러 추가
    window.addEventListener('load', handleScrollAnimations);
    window.addEventListener('scroll', handleScrollAnimations);
    
    // 이미지 지연 로딩
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if('IntersectionObserver' in window && lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-image');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Intersection Observer가 지원되지 않는 경우의 폴백
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy-image');
        });
    }
    
    // 링크 스무스 스크롤
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 페이지 내 앵커 링크 처리 (index.html#section-id 형식)
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // properties.html 특별 처리 (properties.html 또는 properties.html#complex-design)
            if (href.includes('properties.html')) {
                // 현재 페이지가 이미 properties.html인 경우만 기본 동작 방지
                if (window.location.pathname.endsWith('properties.html')) {
                    e.preventDefault();
                    
                    // 해시가 있는 경우 상단으로 스크롤
                    const complexTitle = document.getElementById('complex-design');
                    if (complexTitle) {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                }
                return; // properties.html 처리 후 종료
            }
            
            // 다른 페이지의 앵커 링크인 경우 (예: index.html#section-id)
            if(href.includes('#') && !href.startsWith('#')) {
                const parts = href.split('#');
                const pagePath = parts[0];
                const targetId = '#' + parts[1];
                
                // 현재 페이지인 경우에만 기본 동작 방지 및 스크롤 처리
                if(window.location.pathname.endsWith(pagePath) || 
                   (window.location.pathname.endsWith('/') && pagePath === 'index.html')) {
                    e.preventDefault();
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        // 스크롤 조정 (헤더 높이 고려)
                        window.scrollTo({
                            top: targetElement.offsetTop - 0,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
});