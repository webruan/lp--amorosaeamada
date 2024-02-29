document.addEventListener('DOMContentLoaded', function() {
  var videoContainer = document.getElementById('video');

  var isVideoPlaying = false;

  videoContainer.addEventListener('click', function() {
    if (!isVideoPlaying) {
      var thumb = document.getElementById('video-thumb');
      var video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.onloadstart = function() {
          this.volume = 0.25;
      };
      video.src = './src/assets/videos/amorosaeamada.mp4';

      videoContainer.removeChild(thumb);
      videoContainer.appendChild(video);

      isVideoPlaying = true;
    }
  });
});
