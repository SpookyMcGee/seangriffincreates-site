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
const carousel = document.getElementById('portraitGallery');
let currentIndex = 0;
let intervalId;
let isPaused = false;

function scrollToImage(index) {
  const images = carousel.querySelectorAll('img');
  if (images.length === 0) return;
  const imageWidth = carousel.clientWidth;
  carousel.scrollTo({
    left: index * imageWidth,
    behavior: 'smooth',
  });
}

function nextImage() {
  if (isPaused) return;
  const images = carousel.querySelectorAll('img');
  currentIndex = (currentIndex + 1) % images.length;
  scrollToImage(currentIndex);
}

carousel.addEventListener('mouseenter', () => {
  isPaused = true;
});
carousel.addEventListener('mouseleave', () => {
  isPaused = false;
});

intervalId = setInterval(nextImage, 5000);


// Start it initially
startAutoScroll();
const gallery = document.getElementById('portraitGallery');
let scrollTimer;
let paused = false;

function scrollNext() {
  if (paused) return;
  gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });

  // Wrap around if near the end
  if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10) {
    setTimeout(() => {
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
    }, 5000);
  }
}

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

