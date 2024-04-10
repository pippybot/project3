// Initialize slideIndex to start with the first image
var slideIndex = 0;

// Function to change slides
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to display the current slide
function showSlide(n) {
  var slides = document.getElementsByClassName("slider-image");
  if (n >= slides.length) { 
    slideIndex = 0; // If at end of slides, start from the beginning
  }
  if (n < 0) { 
    slideIndex = slides.length - 1; // If at beginning, go to the end
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slides[slideIndex].style.display = "block"; // Display the current slide
}

// Call the showSlide function to display the initial slide
showSlide(slideIndex);

// Display the initial slide when the page loads
changeSlide(0);
