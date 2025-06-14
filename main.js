document.addEventListener('DOMContentLoaded', () => {
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
  const gallery = document.getElementById('portraitGallery');

  let scrollX = 0;
  let paused = false;

  function autoScroll() {
    if (paused) return;

    const imageWidth = track.querySelector('img').clientWidth;
    scrollX += imageWidth;

    if (scrollX >= track.scrollWidth - gallery.clientWidth) {
      scrollX = 0;
    }

    track.scrollTo({
      left: scrollX,
      behavior: 'smooth'
    });
  }

  gallery.addEventListener('mouseenter', () => paused = true);
  gallery.addEventListener('mouseleave', () => paused = false);

  setInterval(autoScroll, 3000);
});




