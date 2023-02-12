window.addEventListener("load", () => {
  const items = document.querySelectorAll(".servisec-list__item");

  items.forEach((item) => {
    const spanAnimationBgWrapper = item.querySelector(
      ".servisec-list__item-title-span-wrapper"
    );
    const titleWithSpan = item.querySelector(".servisec-list__item-title span");
    const span = item.querySelector(".servisec-list__item-title span");

    spanAnimationBgWrapper.style.left =
      titleWithSpan.offsetLeft +
      titleWithSpan.offsetParent.offsetLeft -
      2 +
      "px";
    spanAnimationBgWrapper.style.top =
      titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
    spanAnimationBgWrapper.style.width =
      span.getBoundingClientRect().width + "px";
    spanAnimationBgWrapper.style.height =
      span.getBoundingClientRect().height / 1 + "px";
  });
});

window.addEventListener("resize", () => {
  items.forEach((item) => {
    const spanAnimationBgWrapper = item.querySelector(
      ".servisec-list__item-title-span-wrapper"
    );
    const titleWithSpan = item.querySelector(".servisec-list__item-title span");
    const span = item.querySelector(".servisec-list__item-title span");

    spanAnimationBgWrapper.style.left =
      titleWithSpan.offsetLeft +
      titleWithSpan.offsetParent.offsetLeft -
      2 +
      "px";
    spanAnimationBgWrapper.style.top =
      titleWithSpan.offsetTop + titleWithSpan.offsetParent.offsetTop + "px";
    spanAnimationBgWrapper.style.width =
      span.getBoundingClientRect().width + "px";
    spanAnimationBgWrapper.style.height =
      span.getBoundingClientRect().height / 1 + "px";
  });
});
