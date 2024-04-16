document.addEventListener("DOMContentLoaded", function() {
    const slideshowImages = ['images/NerdyHallows.jpg', 'images/halfsleeve.jpg'];
    let currentIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideshowImages.length - 1;
        }
        updateslideshowImages();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateslideshowImages();
    });

    function updateImage() {
        imageElement.src = slideshowImages[currentIndex];
    }
});
