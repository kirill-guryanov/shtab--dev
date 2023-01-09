const swiper = new Swiper(".intro__slider-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  mousewheel: true,

  breakpoints: {
    // 1380 >= 1380
    1381: {
      direction: "vertical",
    },
    // when window width is >= 480px
    800: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    }
  }
});

console.log("Haha")