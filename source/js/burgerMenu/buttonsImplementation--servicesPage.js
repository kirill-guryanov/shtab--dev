import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--burgerMenuAddresses",
    ".fillingButton__svg-circle--burgerMenuAddresses",
    ".fillingButton__circle--burgerMenuAddresses",
    2,
    3,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
});
