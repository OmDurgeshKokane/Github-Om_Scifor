const container = document.querySelector('.testimonial-container');

function scrollTestimonials(direction) {
  const scrollAmount = 320; // amount to scroll in pixels
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

