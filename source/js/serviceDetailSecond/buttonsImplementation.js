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
  // types
  addInteractivityToButton(
    ".fillingButton--types",
    ".fillingButton__svg-circle--types",
    ".fillingButton__circle--types",
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
});
