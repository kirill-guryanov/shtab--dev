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
  // benefitsRight
  addInteractivityToButton(
    ".fillingButton--benefitsRight",
    ".fillingButton__svg-circle--benefitsRight",
    ".fillingButton__circle--benefitsRight",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    true
  );
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
  // benefitsRight
  addInteractivityToButton(
    ".fillingButton--benefitsRight",
    ".fillingButton__svg-circle--benefitsRight",
    ".fillingButton__circle--benefitsRight",
    2,
    2,
    0,
    0,
    false
  );
});
