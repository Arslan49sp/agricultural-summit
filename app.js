const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const navLinkMenu = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('is-active')) {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    document.body.style.overflowY = 'scroll';
  } else {
    menuBtn.classList.add('is-active');
    mobileMenu.classList.add('is-active');
    document.body.style.overflowY = 'hidden';
  }
});