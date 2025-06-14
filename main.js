document.addEventListener('DOMContentLoaded', () => {
  // Show default section
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

  showSection('portraits');

  const track = document.querySelector('.carousel-track');
  let scrollPos = 0;
  let paused = false;

  function autoScroll() {
    if (paused) return;

    const image = track.querySelector('img');
    if (!image) return;

    const imageWidth = image.clientWidth;
    scrollPos += imageWidth;

    if (scrollPos >= track.scrollWidth - imageWidth) {
      scrollPos = 0; // Loop back to start
    }

    track.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
  }

  // Pause on hover
  track.addEventListener('mouseenter', () => paused = true);
  track.addEventListener('mouseleave', () => paused = false);

  // Start the scroll
  setInterval(autoScroll, 3000);
});






