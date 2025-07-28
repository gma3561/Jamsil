// download-video.js
// 이 스크립트는 Google Drive에서 비디오를 다운로드하는 방법을 안내합니다.
// Google Drive에서 직접 임베드하는 대신 다운로드 후 호스팅하는 것이 더 나은 성능을 제공합니다.

/*
1. Google Drive 비디오 다운로드 방법:
   - 제공된 링크(https://drive.google.com/file/d/1DicAn7ikKcZAex0oJMW58OMsRJqBtWPR/view)에 접속합니다.
   - 오른쪽 상단의 다운로드 버튼을 클릭합니다.
   - 다운로드된 비디오를 'cheongdam-leel.mp4'로 이름을 변경합니다.
   - 이 파일을 '/public/videos/' 폴더에 저장합니다.

2. 만약 파일 크기가 큰 경우 고려할 사항:
   - 비디오 품질을 줄이거나 길이를 조정하여 파일 크기를 줄일 수 있습니다.
   - 비디오 최적화 도구를 사용하여 웹에 적합한 크기로 압축할 수 있습니다.
   - 대형 비디오의 경우 CDN 서비스 사용을 고려하세요.

3. 대체 방법:
   - YouTube나 Vimeo에 비디오를 업로드하고 임베드하는 방법도 고려할 수 있습니다.
   - iframe을 사용하여 다음과 같이 임베드할 수 있습니다:
     
     <div class="video-background">
       <iframe src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0"
         frameborder="0" allowfullscreen></iframe>
     </div>

     이 방법을 사용하려면 main.css에 다음 스타일을 추가하세요:
     
     .video-background iframe {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       pointer-events: none;
     }
*/

console.log('비디오 파일을 public/videos 폴더에 추가하세요.');