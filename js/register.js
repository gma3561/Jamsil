// register.js

document.addEventListener('DOMContentLoaded', function() {
    // 관심고객 등록 폼 제출
    const registerForm = document.getElementById('registerForm');
    
    if(registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 필수 항목 검증
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const privacyAgree = document.getElementById('privacy_agree').checked;
            
            // 관심 타입 체크 여부 확인
            const interestTypes = document.querySelectorAll('input[name="interest_type"]:checked');
            
            if(name === '') {
                alert('이름을 입력해주세요.');
                document.getElementById('name').focus();
                return;
            }
            
            if(phone === '') {
                alert('연락처를 입력해주세요.');
                document.getElementById('phone').focus();
                return;
            }
            
            // 전화번호 형식 검증 (숫자만)
            if(!/^[0-9]{10,11}$/.test(phone)) {
                alert('올바른 연락처 형식이 아닙니다. 숫자만 입력해주세요.');
                document.getElementById('phone').focus();
                return;
            }
            
            if(interestTypes.length === 0) {
                alert('관심 타입을 하나 이상 선택해주세요.');
                return;
            }
            
            if(!privacyAgree) {
                alert('개인정보 수집 및 이용에 동의해주세요.');
                document.getElementById('privacy_agree').focus();
                return;
            }
            
            // 폼 데이터 수집
            const formData = {
                name: name,
                phone: phone,
                email: document.getElementById('email').value,
                interestTypes: Array.from(interestTypes).map(type => type.value),
                saleType: document.querySelector('input[name="sale_type"]:checked').value,
                budget: document.getElementById('budget').value,
                message: document.getElementById('message').value,
                marketingAgree: document.getElementById('marketing_agree').checked
            };
            
            // 여기에 폼 제출 로직 추가
            // 예: 서버에 데이터 전송, API 호출 등
            console.log('Register Form submitted:', formData);
            
            // 폼 제출 성공 메시지
            alert('관심고객 등록이 완료되었습니다. 빠른 시일 내에 담당자가 연락드리겠습니다.');
            
            // 폼 초기화
            registerForm.reset();
            
            // 채널톡으로 데이터 전송 (선택적)
            if(window.ChannelIO) {
                window.ChannelIO('showMessenger');
                window.ChannelIO('addTags', ['관심고객']);
                window.ChannelIO('updateUser', {
                    name: name,
                    mobileNumber: phone,
                    email: document.getElementById('email').value,
                    description: `관심타입: ${Array.from(interestTypes).map(type => type.value).join(', ')}, 분양유형: ${document.querySelector('input[name="sale_type"]:checked').value}`
                });
                window.ChannelIO('sendUserChat', {
                    message: `안녕하세요, 청담 르엘 관심고객으로 등록했습니다.\n관심타입: ${Array.from(interestTypes).map(type => type.value).join(', ')}\n분양유형: ${document.querySelector('input[name="sale_type"]:checked').value}\n문의사항: ${document.getElementById('message').value || '없음'}`
                });
            }
        });
    }
    
    // 채널톡 연동 (채널톡 플러그인 키 필요)
    (function() {
        var w = window;
        if (w.ChannelIO) {
            return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
        }
        var ch = function() {
            ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args) {
            ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
            if (w.ChannelIOInitialized) {
                return;
            }
            w.ChannelIOInitialized = true;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
            s.charset = 'UTF-8';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        if (document.readyState === 'complete') {
            l();
        } else if (window.attachEvent) {
            window.attachEvent('onload', l);
        } else {
            window.addEventListener('DOMContentLoaded', l, false);
            window.addEventListener('load', l, false);
        }
    })();
    
    // 채널톡 부트스트랩
    ChannelIO('boot', {
        "pluginKey": "6c361437-0a03-488c-9dc5-66c38f13e4c1", // 채널톡 플러그인 키
        "memberId": "", // 고객 아이디 (있는 경우)
        "profile": {
            "name": "", // 고객 이름 (있는 경우)
            "mobileNumber": "", // 고객 전화번호 (있는 경우)
            "email": "" // 고객 이메일 (있는 경우)
        }
    });
});