// Obtener elementos del DOM
const btnAbrirMenu = document.getElementById('container-btn-movil');
const btnCloseMenu = document.getElementById('btn-close-menu');
const menuMovil = document.getElementById('menu-movil');
// const sliderContainer = document.getElementById('slider-container');
// const slides = document.querySelectorAll('.slide');

// Event listeners para abrir y cerrar el menú
btnAbrirMenu.addEventListener('click', mostrarMenuMovil);
btnCloseMenu.addEventListener('click', ocultarMenuMovil);

// Event listener para los enlaces dentro del menú
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces dentro del menú
    const links = menuMovil.getElementsByTagName('a');

    // Agregar un evento de clic a cada enlace
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            // Cerrar el menú al hacer clic en un enlace
            menuMovil.classList.remove('menu-visible');
        });
    }
});

// Event listeners para la navegación del slider
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

// Función para mostrar el menú móvil
function mostrarMenuMovil() {
    menuMovil.classList.add('menu-visible');
}

// Función para ocultar el menú móvil
function ocultarMenuMovil() {
    menuMovil.classList.remove('menu-visible');
}

// Funciones para manejar el slider

// Obtener elementos del DOM
// Obtener elementos del DOM
const sliderContainer = document.getElementById('slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Inicializar el índice actual
let currentIndex = 0;

// Función para mostrar un slide específico
function showSlide(index) {
    currentIndex = index;

    // Eliminar los nodos hijos actuales del contenedor
    while (sliderContainer.firstChild) {
        sliderContainer.removeChild(sliderContainer.firstChild);
    }

    // Agregar el nuevo slide al contenedor
    sliderContainer.appendChild(slides[currentIndex].cloneNode(true));
}

// Función para mostrar el siguiente slide
function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

// Función para mostrar el slide anterior
function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
}

// Event listeners para los botones de navegación
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Mostrar el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentIndex);
});
