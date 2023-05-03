function acceptCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
  playMedia();
}

function rejectCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
}

function playMedia() {
  document.getElementById('video-container').style.display = 'block';
  document.getElementById('video').play();
  document.getElementById('audio').play();
}
