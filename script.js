// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Smooth scroll y cierre de menú
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navList.classList.remove('active');
            hamburger.classList.remove('active');
            const href = link.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});