const body = document.querySelector("body");
const loaderBg = document.querySelector(".loader");
const loaderFirst = document.querySelector(".loader-first");
const loaderSecond = document.querySelector(".loader-second");

window.addEventListener("load", () => {
  body.classList.remove("hidden");
  loaderBg.classList.add("loader--hide");
  loaderFirst.classList.add("loader-first--active");
  loaderSecond.classList.add("loader-second--active");

  loaderBg.addEventListener(
    "animationstart",
    () => {
      setTimeout(() => {
        loaderBg.classList.add("loader--none");
      }, 1100);
    },
    {
      once: true,
      useCapture: false,
    }
  );
});
