let count = 10;
const countdownNumber = document.getElementById('countdown-number');
const zoomImage = document.querySelector('.zoom-image');

const timer = setInterval(() => {
  count--;
  countdownNumber.textContent = count;

  // 残り3秒でズームアウト
  if (count === 3) {
    zoomImage.style.transform = 'scale(1)'; // ズームアウト
  }

  if (count === 0) {
    clearInterval(timer);
    countdownNumber.textContent = '0';
  }
}, 1000);
