document.getElementById('hamburger').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-image');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    // Evento para la flecha "anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    // Evento para la flecha "siguiente"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
});