import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // intro top
  addInteractivityToButton(
    ".fillingButton--introTop",
    ".fillingButton__svg-circle--introTop",
    ".fillingButton__circle--introTop",
    3,
    3,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    2,
    2,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // answersQuestions
  addInteractivityToButton(
    ".fillingButton--answersQuestions",
    ".fillingButton__svg-circle--answersQuestions",
    ".fillingButton__circle--answersQuestions",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    false
  );
  // costsTop
  addInteractivityToButton(
    ".fillingButton--costsTop",
    ".fillingButton__svg-circle--costsTop",
    ".fillingButton__circle--costsTop",
    2,
    2,
    0,
    0,
    true,
    "whiteArrow",
    false
  );
  // costsItem
  const costsItems = document.querySelectorAll(".costs__contentBottomItem");
  costsItems.forEach((item) => {
    const one = item.querySelector(".fillingButton--costsItem");
    const two = item.querySelector(".fillingButton__svg-circle--costsItem");
    const three = item.querySelector(".fillingButton__circle--costsItem");

    addInteractivityToButton(
      one,
      two,
      three,
      3,
      3,
      0,
      0,
      true,
      "blackArrow",
      false,
      [],
      null,
      true
    );
  });
});

window.addEventListener("resize", () => {
  // intro top
  addInteractivityToButton(
    ".fillingButton--introTop",
    ".fillingButton__svg-circle--introTop",
    ".fillingButton__circle--introTop",
    3,
    3,
    0,
    0,
    false
  );
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    3,
    2,
    0,
    0,
    false
  );
  // answersQuestions
  addInteractivityToButton(
    ".fillingButton--answersQuestions",
    ".fillingButton__svg-circle--answersQuestions",
    ".fillingButton__circle--answersQuestions",
    2,
    2,
    0,
    0,
    false
  );
  // costsTop
  addInteractivityToButton(
    ".fillingButton--costsTop",
    ".fillingButton__svg-circle--costsTop",
    ".fillingButton__circle--costsTop",
    2,
    2,
    0,
    0,
    false
  );
  // // costsItem
  const costsItems = document.querySelectorAll(".costs__contentBottomItem");
  costsItems.forEach((item) => {
    const one = item.querySelector(".fillingButton--costsItem");
    const two = item.querySelector(".fillingButton__svg-circle--costsItem");
    const three = item.querySelector(".fillingButton__circle--costsItem");

    addInteractivityToButton(one, two, three, 3, 3, 0, 0, false);
  });
});
