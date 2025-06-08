// header
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  header = document.getElementById("header");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// scroll header
function scrollHeader() {
  if (window.scrollY > 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// fade in
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  const targets = document.querySelectorAll(
    ".atas, .bawah, .kiri, .kanan, .zoom"
  );
  targets.forEach((target) => observer.observe(target));
});

// swiper
const swiper = new Swiper(".campaignSwiper", {
  slidesPerView: "3",
  spaceBetween: 1,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1111: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// faq
const faqButtons = document.querySelectorAll(".faq-button");
let currentFaq = null;
let currentButton = null;

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqId = button.getAttribute("data-faq");
    const faqAnswer = document.querySelector(`.answer-${faqId}`);

    if (!faqAnswer) return;

    const icon = button.querySelector("i");

    if (currentFaq === faqAnswer) {
      faqAnswer.style.maxHeight = null;
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      currentFaq = null;
      currentButton = null;
    } else {
      if (currentFaq) {
        currentFaq.style.maxHeight = null;
        const previousIcon = currentButton.querySelector("i");
        previousIcon.classList.remove("fa-minus");
        previousIcon.classList.add("fa-plus");
      }

      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");

      currentFaq = faqAnswer;
      currentButton = button;
    }
  });
});

// button to top
document.addEventListener("DOMContentLoaded", function () {
  const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      toTopBtn.classList.remove(
        "opacity-0",
        "scale-90",
        "translate-y-4",
        "pointer-events-none"
      );
    } else {
      toTopBtn.classList.add(
        "opacity-0",
        "scale-90",
        "translate-y-4",
        "pointer-events-none"
      );
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
