"use strict";
// parent
const parent = document.querySelector(".quizComponent");
// slider
const slidesWrapper = document.querySelector(".quizComponentQuestions");
const slides = document.querySelectorAll(".quizComponentQuestion");
// controls
const controls = document.querySelector(".quizComponentControls");
// buttons
const leftSideButton = document.querySelector(
  ".quizComponentControlsLeftButton"
);
const leftSideButtonSvg = document.querySelector(
  ".quizComponentControlsLeftButtonImage"
);
const rightSideButton = document.querySelector(
  ".quizComponentControlsRightButton"
);
// stages
const currentStage = document.querySelector(
  ".quizComponentControlsStagesCurrentStage"
);
const stagesAtAll = document.querySelector(".quizComponentControlsStagesAtAll");

//
let currentLeftButtonFontSize = 0;

window.addEventListener("load", () => {
  currentLeftButtonFontSize = getComputedStyle(leftSideButton).fontSize;
  let currentSlide = 1;
  let atAllSlides;
  //
  let currentTransformPosition = 0;
  // get width for scroll
  const parentWidth = parent.getBoundingClientRect().width;
  // set slides width
  slides.forEach((slide, index) => {
    const parentLeftPadding = getComputedStyle(parent).paddingLeft;
    const reg = /\d*/;
    slide.style.width = `${
      parentWidth - Number(parentLeftPadding.match(reg) * 2)
    }px`;
    slide.style.marginRight = `${Number(parentLeftPadding.match(reg) * 2)}px`;
    slide.dataset.slideNumber = index + 1;
    atAllSlides = slide.dataset.slideNumber = index + 1;
  });
  // set at all stages
  stagesAtAll.textContent = atAllSlides;
  // set buttons type for change animation and interaction
  leftSideButton.dataset.type = "next";
  // right side button
  rightSideButton.addEventListener("click", () => {
    const isActive = rightSideButton.dataset.type === "active";

    const notLastSlideNow = currentSlide !== atAllSlides;
    const lastSlideNow = currentSlide === atAllSlides;

    if (isActive && notLastSlideNow && atAllSlides - currentSlide !== 1) {
      currentTransformPosition -= parentWidth;
      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
      // set current slide
      currentSlide++;
      currentStage.innerText = currentSlide;
    } else if (isActive && atAllSlides - currentSlide === 1) {
      let counter = 0;

      rightSideButton.textContent = "Завершить";

      currentTransformPosition -= parentWidth;
      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
      // set current slide
      if (counter < 1) {
        currentSlide++;
        counter++;
      }
      currentStage.innerText = atAllSlides;
    }
    if (lastSlideNow) {
      parent.submit();
    }
    console.log(currentSlide);
  });
  // left side buttom
  leftSideButton.addEventListener("click", () => {
    const isNext = leftSideButton.dataset.type === "next";
    const isPrev = leftSideButton.dataset.type === "prev";

    const notLastSlideNow = currentSlide !== atAllSlides;
    const notLessThanOne = currentSlide !== 1;

    if (isNext && notLastSlideNow) {
      currentTransformPosition -= parentWidth;
      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
      // set current slide
      currentSlide++;
      currentStage.innerText = currentSlide;
    }

    if (isPrev && notLessThanOne) {
      currentTransformPosition += parentWidth;
      slidesWrapper.style.transform = `translateX(${currentTransformPosition}px)`;
      // set current slide
      currentSlide--;
      currentStage.innerText = currentSlide;
    }

    if (currentSlide > 1) {
      leftSideButton.dataset.type = "prev";
      // add active type to right button
      rightSideButton.dataset.type = "active";
      //
      rightSideButton.classList.remove(
        "quizComponentControlsRightButton--notActive"
      );
      //
      leftSideButton.classList.add("quizComponentControlsLeftButton--prev");
      leftSideButtonSvg.classList.add(
        "quizComponentControlsLeftButtonImage--prev"
      );
      //
      leftSideButton.style.fontSize = 0;
    }

    if (currentSlide === 1) {
      leftSideButton.style.fontSize = `${currentLeftButtonFontSize}`;
      //
      leftSideButton.dataset.type = "next";
      // reset active data type from right button
      rightSideButton.dataset.type = "";
      rightSideButton.classList.add(
        "quizComponentControlsRightButton--notActive"
      );
      //
      leftSideButtonSvg.classList.remove(
        "quizComponentControlsLeftButtonImage--prev"
      );
      leftSideButton.classList.remove("quizComponentControlsLeftButton--prev");
    }

    if (currentSlide < atAllSlides) {
      rightSideButton.textContent = "Далее";
    }
  });
});
