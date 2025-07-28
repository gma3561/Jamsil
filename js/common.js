// common.js

document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const gnb = document.querySelector('.gnb');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            gnb.classList.toggle('active');
            
            // 모바일 메뉴 버튼 애니메이션
            const bars = this.querySelectorAll('.bar');
            if(this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
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
});