window.addEventListener("load", () => {
  const items = document.querySelectorAll(".servisec-list__item");

  items.forEach((item) => {
    const spanAnimationBgWrapper = item.querySelector(
      ".servisec-list__item-title-span-wrapper"
    );
    const titleWiithSpan = item.querySelector(".servisec-list__item-title");
    const span = item.querySelector(".servisec-list__item-title span");

    spanAnimationBgWrapper.style.left = titleWiithSpan.offsetLeft - 5 + "px";
    spanAnimationBgWrapper.style.top = titleWiithSpan.offsetTop - 5 + "px";
    spanAnimationBgWrapper.style.width =
      span.getBoundingClientRect().width + "px";
    spanAnimationBgWrapper.style.height =
      span.getBoundingClientRect().height / 1 + "px";
  });
});

window.addEventListener("resize", () => {
  const items = document.querySelectorAll(".servisec-list__item");

  items.forEach((item) => {
    const spanAnimationBgWrapper = item.querySelector(
      ".servisec-list__item-title-span-wrapper"
    );
    const titleWiithSpan = item.querySelector(".servisec-list__item-title");
    const span = item.querySelector(".servisec-list__item-title span");

    spanAnimationBgWrapper.style.left = titleWiithSpan.offsetLeft - 5 + "px";
    spanAnimationBgWrapper.style.top = titleWiithSpan.offsetTop - 5 + "px";
    spanAnimationBgWrapper.style.width =
      span.getBoundingClientRect().width + "px";
    spanAnimationBgWrapper.style.height =
      span.getBoundingClientRect().height - 1 + "px";
  });
});
