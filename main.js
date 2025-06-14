const scrollContainer = document.getElementById('scrollGallery');
let paused = false;

scrollContainer.addEventListener('mouseenter', () => paused = true);
scrollContainer.addEventListener('mouseleave', () => paused = false);

function autoScroll() {
  if (!paused) {
    scrollContainer.scrollLeft += 1;

    // Loop to beginning if near the end
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 2) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}

setInterval(autoScroll, 20); // smooth and slow
