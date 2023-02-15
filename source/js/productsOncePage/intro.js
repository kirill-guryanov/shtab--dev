const header = document.querySelector(".header--main");
const intro = document.querySelector(".intro");

window.addEventListener("load", () => {
  intro.style.marginTop = header.getBoundingClientRect().height + "px";
});
