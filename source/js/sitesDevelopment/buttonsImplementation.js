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
  // infoOffer
  addInteractivityToButton(
    ".fillingButton--infoOffer",
    ".fillingButton__svg-circle--infoOffer",
    ".fillingButton__circle--infoOffer",
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
});
