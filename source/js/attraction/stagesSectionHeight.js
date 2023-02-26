const section = document.querySelector(".stages");
const list = document.querySelector(".stages__contentBottomWrapper");

window.addEventListener("load", () => {
  const listHeight = list.getBoundingClientRect().height;
  section.style.maxHeight = listHeight + 30 + "px";
  console.log(listHeight);
});

window.addEventListener("resize", () => {
  const listHeight = list.getBoundingClientRect().height;
  section.style.maxHeight = listHeight + 30 + "px";
  console.log(listHeight);
});
