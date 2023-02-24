import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // costs
  addInteractivityToButton(
    ".fillingButton--costs",
    ".fillingButton__svg-circle--costs",
    ".fillingButton__circle--costs",
    2,
    2,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // stack top
  addInteractivityToButton(
    ".fillingButton--stackTop",
    ".fillingButton__svg-circle--stackTop",
    ".fillingButton__circle--stackTop",
    3,
    3,
    0,
    0,
    true,
    "blackArrow",
    false
  );
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
    3,
    3,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // offer
  addInteractivityToButton(
    ".fillingButton--infoOffer",
    ".fillingButton__svg-circle--infoOffer",
    ".fillingButton__circle--infoOffer",
    3,
    3,
    0,
    0,
    true,
    "blackArrow",
    false
  );
});

window.addEventListener("resize", () => {
  // stack top
  addInteractivityToButton(
    ".fillingButton--stackTop",
    ".fillingButton__svg-circle--stackTop",
    ".fillingButton__circle--stackTop",
    3,
    3,
    0,
    0,
    false
  );
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
    3,
    0,
    0,
    false
  );
  // costs
  addInteractivityToButton(
    ".fillingButton--costs",
    ".fillingButton__svg-circle--costs",
    ".fillingButton__circle--costs",
    3,
    3,
    0,
    0,
    false
  );
  // offer
  addInteractivityToButton(
    ".fillingButton--infoOffer",
    ".fillingButton__svg-circle--infoOffer",
    ".fillingButton__circle--infoOffer",
    3,
    3,
    0,
    0,
    false
  );
});
