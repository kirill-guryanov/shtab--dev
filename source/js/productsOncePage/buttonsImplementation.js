import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
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
