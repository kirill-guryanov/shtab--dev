import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--burgerMenuAddresses",
    ".fillingButton__svg-circle--burgerMenuAddresses",
    ".fillingButton__circle--burgerMenuAddresses",
    1,
    1,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
});
