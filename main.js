function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.classList.remove('hidden');
  }
}

// Show default section
showSection('portraits');
const carouselTrack = document.querySelector('.carousel-track');
const images = carouselTrack.querySelectorAll('img');
let currentIndex = 0;
let intervalId;
let isPaused = false;

function updateCarousel() {
  const offset = currentIndex * -100;
  carouselTrack.style.transform = `translateX(${offset}vw)`;
}

function nextImage() {
  if (isPaused) return;
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

const carousel = document.getElementById('portraitGallery');

carousel.addEventListener('mouseenter', () => {
  isPaused = true;
});
carousel.addEventListener('mouseleave', () => {
  isPaused = false;
});

intervalId = setInterval(nextImage, 5000);

function startScroll() {
  scrollTimer = setInterval(scrollNext, 5000);
}

function stopScroll() {
  clearInterval(scrollTimer);
}

gallery.addEventListener('mouseenter', () => {
  paused = true;
  stopScroll();
});

gallery.addEventListener('mouseleave', () => {
  paused = false;
  startScroll();
});

startScroll();

