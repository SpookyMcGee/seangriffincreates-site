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

const carouselTrack = document.querySelector('.carousel-track');
const images = carouselTrack.querySelectorAll('img');
let currentIndex = 0;
let isPaused = false;

function updateCarousel() {
  const offset = currentIndex * -100;
  carouselTrack.style.transform = `translateX(${offset}vw)`;
}

function nextImage() {
  if (!isPaused) {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }
}

const gallery = document.getElementById('portraitGallery');
gallery.addEventListener('mouseenter', () => isPaused = true);
gallery.addEventListener('mouseleave', () => isPaused = false);

// Start automatic scrolling
setInterval(nextImage, 5000);






