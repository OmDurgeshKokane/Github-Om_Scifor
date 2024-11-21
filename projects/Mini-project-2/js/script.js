// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to Top Button
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

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    alert('Thank you for contacting me!');
    contactForm.reset();
  } else {
    contactForm.classList.add('was-validated');
  }
});

// Skills Animation
const skills = document.querySelectorAll('.skills-list li');

skills.forEach(skill => {
  skill.style.opacity = 0;
  skill.style.transform = 'translateY(20px)';
  skill.style.transition = 'all 0.5s ease';

  window.addEventListener('scroll', () => {
    if (skill.getBoundingClientRect().top < window.innerHeight - 100) {
      skill.style.opacity = 1;
      skill.style.transform = 'translateY(0)';
    }
  });
});
