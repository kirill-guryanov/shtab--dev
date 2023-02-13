import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--projectsOffer",
    ".fillingButton__svg-circle--projectsOffer",
    ".fillingButton__circle--projectsOffer",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    false
  );
});

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--projectsOffer",
    ".fillingButton__svg-circle--projectsOffer",
    ".fillingButton__circle--projectsOffer",
    2,
    2,
    0,
    0,
    false
  );
});
