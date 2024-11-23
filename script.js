const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.className = 'nav-toggle';

document.querySelector('.navbar').appendChild(navToggle);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});