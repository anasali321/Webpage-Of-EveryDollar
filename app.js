// Add any interactivity if needed (e.g., animations or event handling)
/*
document.querySelector(".create-account-btn").addEventListener("click", () => {
    alert("Account creation feature coming soon!");
  });*/

  const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".testimonial-card");
let currentIndex = 0;

// Function to change slides
const changeSlide = () => {
  // Remove active class from the current slide
  slides[currentIndex].classList.remove("active");

  // Increment the index and loop back to the first slide if needed
  currentIndex = (currentIndex + 1) % slides.length;

  // Add active class to the new current slide
  slides[currentIndex].classList.add("active");
};

// Event listener for clicks anywhere on the page
document.body.addEventListener("click", changeSlide);

