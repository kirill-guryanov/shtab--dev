import { addInteractivityToButton } from "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--products",
    ".fillingButton__svg-circle--products",
    ".fillingButton__circle--products",
    2,
    2,
    0,
    0,
    false,
    "whiteArrow",
    true
  );
});

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--products",
    ".fillingButton__svg-circle--products",
    ".fillingButton__circle--products",
    2,
    2,
    0,
    0,
    false
  );
});
