import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--brief-intro",
    ".fillingButton__svg-circle--brief-intro",
    ".fillingButton__circle--brief-intro",
    2,
    22,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  addInteractivityToButton(
    ".fillingButton--brief-bottom",
    ".fillingButton__svg-circle--brief-bottom",
    ".fillingButton__circle--brief-bottom",
    2,
    2,
    0,
    0,
    false,
    null,
    true,
    [20, 20],
    "bigWhiteFirst"
  );
});

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--brief-intro",
    ".fillingButton__svg-circle--brief-intro",
    ".fillingButton__circle--brief-intro",
    2,
    22,
    0,
    0,
    false
  );
});
