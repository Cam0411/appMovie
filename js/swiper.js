var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  breakpoints: {
    240: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    340: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    440: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    968: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});