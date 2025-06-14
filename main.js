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
const carousel = document.querySelector('.carousel');

let scrollAmount = 0;
const scrollStep = 1;
const delay = 20; // ms between scroll steps
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (carousel.scrollWidth - carousel.clientWidth <= scrollAmount) {
      scrollAmount = 0;
      carousel.scrollTo({ left: 0 });
    } else {
      scrollAmount += scrollStep;
      carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  }, delay);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

// Start it initially
startAutoScroll();
