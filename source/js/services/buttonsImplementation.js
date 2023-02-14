import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--infoOffer",
    ".fillingButton__svg-circle--infoOffer",
    ".fillingButton__circle--infoOffer",
    3,
    4,
    0,
    0,
    true,
    "blackArrow",
    false
  );

  addInteractivityToButton(
    ".fillingButton--infoInfo",
    ".fillingButton__svg-circle--infoInfo",
    ".fillingButton__circle--infoInfo",
    3,
    4,
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
    4,
    0,
    0,
    false
  );

  addInteractivityToButton(
    ".fillingButton--infoInfo",
    ".fillingButton__svg-circle--infoInfo",
    ".fillingButton__circle--infoInfo",
    3,
    4,
    0,
    0,
    false
  );
});
