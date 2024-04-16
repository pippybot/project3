document.addEventListener("DOMContentLoaded", function() {
    const slideshow = ['images/NerdyHallows.jpg', 'images/halfsleeve.jpg'];
    let currentIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideshow.length - 1;
        }
        updateSlideshow();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateImage();
    });

    function updateImage() {
        imageElement.src = images[currentIndex];
    }
});
