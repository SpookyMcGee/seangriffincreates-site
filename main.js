const track = document.querySelector('.carousel-track');
const imgs = track.querySelectorAll('img');
const imgCount = imgs.length;

let index = 0;
let paused = false;

// Move to next slide
function moveNext() {
  if (paused) return;
  index = (index + 1) % imgCount;
  track.style.transform = `translateX(-${(100 / 3) * index}%)`;
}

// Pause on hover
document.getElementById('portraitCarousel')
  .addEventListener('mouseenter', () => paused = true);
document.getElementById('portraitCarousel')
  .addEventListener('mouseleave', () => paused = false);

// Start auto‑scroll every 4 seconds (adjustable)
let timer = setInterval(moveNext, 4000);

