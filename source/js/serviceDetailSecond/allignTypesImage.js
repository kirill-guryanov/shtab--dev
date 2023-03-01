const items = document.querySelectorAll(".types__contentBottomItem");

document.addEventListener("DOMContentLoaded", () => {
  items.forEach((item) => {
    const text = item.querySelector(".decorationsWrapperBlackText");
    const image = item.querySelector(".decorationsWrapperBlackImage");

    const textLeftMargin = text.offsetLeft;
    const textWidth = text.getBoundingClientRect().width;

    image.style.left = `${textLeftMargin + textWidth + 10}px`;

    if (window.innerWidth <= 900) {
      image.style.left = `${textLeftMargin + textWidth + 20}px`;
    }

    if (window.innerWidth <= 350) {
      image.style.left = `${textLeftMargin + textWidth + 30}px`;
    }
  });
});
