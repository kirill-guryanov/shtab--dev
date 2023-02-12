import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--offer",
    ".fillingButton__svg-circle--offer",
    ".fillingButton__circle--offer",
    2,
    22,
    0,
    0,
    true,
    "blackArrow",
    false
  );
});

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--offer",
    ".fillingButton__svg-circle--offer",
    ".fillingButton__circle--offer",
    2,
    22,
    0,
    0,
    false
  );
});
