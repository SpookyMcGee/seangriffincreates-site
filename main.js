function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.classList.remove('hidden');
  }
}

// --- Carousel Setup ---
showSection('portraits');

const track = document.querySelector('.carousel-track');
let scrollPos = 0;
let paused = false;

function autoScroll() {
  if (paused) return;

  const imageWidth = track.querySelector('img').clientWidth;
  scrollPos += imageWidth;

  if (scrollPos >= track.scrollWidth - imageWidth) {
    scrollPos = 0; // loop back
  }

  track.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}

track.addEventListener('mouseenter', () => paused = true);
track.addEventListener('mouseleave', () => paused = false);

setInterval(autoScroll, 3000);






