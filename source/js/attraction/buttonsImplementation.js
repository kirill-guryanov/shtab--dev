import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    3,
    3,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // servicesTop
  addInteractivityToButton(
    ".fillingButton--servicesTop",
    ".fillingButton__svg-circle--servicesTop",
    ".fillingButton__circle--servicesTop",
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
    "blackArrow"
  );
  // introBottomOffer
  addInteractivityToButton(
    ".fillingButton--introBottomOffer",
    ".fillingButton__svg-circle--introBottomOffer",
    ".fillingButton__circle--introBottomOffer",
    2,
    2,
    0,
    0,
    true,
    "blackArrow"
  );
});

window.addEventListener("resize", () => {
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    3,
    3,
    0,
    0,
    false
  );
  // servicesTop
  addInteractivityToButton(
    ".fillingButton--servicesTop",
    ".fillingButton__svg-circle--servicesTop",
    ".fillingButton__circle--servicesTop",
    2,
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
  // introBottomOffer
  addInteractivityToButton(
    ".fillingButton--introBottomOffer",
    ".fillingButton__svg-circle--introBottomOffer",
    ".fillingButton__circle--introBottomOffer",
    3,
    3,
    0,
    0,
    false
  );
});
