let slideIndex = 0;
const slide = document.getElementById('slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = [
    'images/NerdyHallows.jpg',
    'images/halfsleeve.jpg,
]

function prevSlide() {

    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {

        slideIndex = images.length - 1;
    }

    slide.src = images[slideIndex];
}

function nextSlide() {

    slideIndex = slideIndex + 1;
    if (slideIndex >= images.length) {

        slideIndex = 0;
    }

    slide.src = images[slideIndex];
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
