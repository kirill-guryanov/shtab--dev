import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--contacts",
    ".fillingButton__svg-circle--contacts",
    ".fillingButton__circle--contacts",
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
    ".fillingButton--contacts",
    ".fillingButton__svg-circle--contacts",
    ".fillingButton__circle--contacts",
    2,
    22,
    0,
    0,
    false
  );
});
