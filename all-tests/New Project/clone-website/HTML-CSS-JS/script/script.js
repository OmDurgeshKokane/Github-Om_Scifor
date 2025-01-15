const container = document.querySelector('.testimonial-container');

function scrollTestimonials(direction) {
  const scrollAmount = 320; // amount to scroll in pixels
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

