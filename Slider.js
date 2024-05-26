let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
