window.addEventListener("load", function () {
  const splide4 = new Splide(".reviews__splide", {
    arrows: true,
    perMove: 1,
    pagination: false,
    focus: "center",
    autoWidth: true,

    breakpoints: {
      5000: {
        perPage: 3,
        gap: 55,
      },
      920: {
        perPage: 2,
      },
      675: {
        perPage: 1,
        gap: 40,
      },
      450: {
        perPage: 1,
      },
    },
  }).mount();
});
