document.addEventListener("DOMContentLoaded", function () {
    /** ------------------------------
     * Fade-in for Hero + Sections
     ------------------------------- */
  const slider = document.getElementById("slider");
  const dots = document.querySelectorAll(".dot");
  const slides = slider.children;
  let heroIndex = 0;

  function showHeroSlide(i) {
    slider.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("bg-blue-600", idx === i);
      dot.classList.toggle("bg-gray-400", idx !== i);
    });
  }

  function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % slides.length;
    showHeroSlide(heroIndex);
  }

  setInterval(nextHeroSlide, 3000);

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      heroIndex = i;
      showHeroSlide(heroIndex);
    })
  );

  showHeroSlide(heroIndex);



    /** ------------------------------
     * Shop By Category Slider
     ------------------------------- */
const cardSlider = document.getElementById("cardSlider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const visibleCards = 3;
let currentIndex = 0;
let autoSlideInterval;

for (let i = 0; i < visibleCards; i++) {
  const clone = cardSlider.children[i].cloneNode(true);
  cardSlider.appendChild(clone);
}

const totalCards = cardSlider.children.length;

function updateSlider() {
  const cardWidth = cardSlider.children[0].offsetWidth;
  cardSlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function goNext() {
  currentIndex++;
  updateSlider();

  if (currentIndex === totalCards - visibleCards) {
    setTimeout(() => {
      cardSlider.style.transition = "none";
      currentIndex = 0;
      updateSlider();
      setTimeout(() => {
        cardSlider.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    }, 700);
  }
}

function goPrev() {
  if (currentIndex === 0) {
    cardSlider.style.transition = "none";
    currentIndex = totalCards - visibleCards;
    updateSlider();
    setTimeout(() => {
      cardSlider.style.transition = "transform 0.5s ease-in-out";
      currentIndex--;
      updateSlider();
    }, 50);
  } else {
    currentIndex--;
    updateSlider();
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(goNext, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Arrow buttons
nextBtn.addEventListener("click", () => {
  goNext();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  goPrev();
  stopAutoSlide();
  startAutoSlide();
});

// 🚀 Stop autoplay when hovering over categories
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
  category.addEventListener("mouseenter", stopAutoSlide);
  category.addEventListener("mouseleave", startAutoSlide);
});

cardSlider.style.transition = "transform 0.5s ease-in-out";
updateSlider();
startAutoSlide();





    /** ------------------------------
     * Login Form
     ------------------------------- */

  let loginForm = document.querySelector(".login-form-container");

  document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
  };

  document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
  };

  // Nav Menu
  let mobileNav = document.querySelector("#mobile-nav");
  let mobileNavContainer = document.querySelector("#mobile-nav-container");
  let navBtn = document.querySelector("#nav-btn");
  let navCloseBtn = document.querySelector("#nav-close-btn");

  // Open Nav
  navBtn.onclick = () => {
    mobileNav.style.right = "0";
  };

  // Close Nav
  navCloseBtn.onclick = () => {
    mobileNav.style.right = "-100%";
  };


  /** ------------------------------
     * Fade-in for Hero + Sections
     ------------------------------- */
    const fadeEls = document.querySelectorAll('.fade-in');

    // Add initial hero fade-in with slight delay
    const heroText = document.querySelector('.fade-in');
    if (heroText) {
        setTimeout(() => {
            heroText.classList.add('show');
        }, 500);
    }

    // Intersection Observer for other fade-ins on scroll
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // run once
            }
        });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => {
        observer.observe(el);
    });


});

