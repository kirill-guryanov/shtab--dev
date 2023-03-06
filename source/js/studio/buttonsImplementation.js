import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
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
    ".fillingButton--brief-bottom",
    ".fillingButton__svg-circle--brief-bottom",
    ".fillingButton__circle--brief-bottom",
    2,
    2,
    0,
    0,
    false
  );
});
