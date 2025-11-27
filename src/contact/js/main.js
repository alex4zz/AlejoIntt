// src/js/main.js

const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');

const toggleNav = () => {
  navMenu.classList.toggle('nav-menu--open');
  navToggle.setAttribute(
    'aria-expanded',
    navMenu.classList.contains('nav-menu--open')
  );
};

navToggle.addEventListener('click', toggleNav);

// Cierra el menú al hacer click en un enlace (móvil)
navMenu.addEventListener('click', event => {
  if (event.target.matches('.nav-menu__link')) {
    navMenu.classList.remove('nav-menu--open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Efecto ligero al hacer scroll sobre el header
const siteHeader = document.querySelector('.site-header');

const handleScroll = () => {
  const scrolled = window.scrollY > 12;
  siteHeader.style.boxShadow = scrolled
    ? '0 10px 30px rgba(15, 23, 42, 0.9)'
    : 'none';
};

window.addEventListener('scroll', handleScroll);
