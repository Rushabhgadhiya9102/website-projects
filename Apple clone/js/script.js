// Hide all sections initially
document
  .querySelectorAll(
    "#store, #ipad-section, #mac-section, #iphone-section, #watch-section, #airpods-section, #tv-and-home-section, #entertainment-section, #accessories-section, #support-section"
  )
  .forEach(function (section) {
    section.style.display = "none";
  });

// Add click event listener to all nav links
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Hide all sections
    document
      .querySelectorAll(
        "#home-page, #store, #mac-section, #ipad-section, #iphone-section, #watch-section, #airpods-section, #tv-and-home-section, #entertainment-section, #accessories-section, #support-section"
      )
      .forEach(function (section) {
        section.style.display = "none";
      });

    // Show the section corresponding to the clicked link
    var targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});

// --------------------- SLIDER ICON ROTATIONS ---------------------

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".bi-plus-circle-fill");
  const resetButtons = document.querySelectorAll(".btn-close");

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("rotate");
    });
  });

  resetButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      icons[index].classList.remove("rotate");
    });
  });
});


// --------------------- SLIDER -------------------

// script.js
document.querySelectorAll('.slider').forEach(slider => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevButton = slider.querySelector(".bi-arrow-left-circle-fill");
    const nextButton = slider.querySelector('.next');

    function showSlide(index) {
        currentIndex = index;
        const slidesContainer = slider.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateButtonStates();
    }

    function updateButtonStates() {
        prevButton.disabled = currentIndex === 0; // Disable if at the first slide
        nextButton.disabled = currentIndex === totalSlides - 1; // Disable if at the last slide
        navButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentIndex); // Highlight active nav button
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            showSlide(currentIndex + 1);
        }
    });

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'));
            showSlide(index);
        });
    });

    updateButtonStates(); // Initialize button states
});