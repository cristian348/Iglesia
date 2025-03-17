// Animación para el título
document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.animated-title');
    title.style.opacity = '1';
});

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});