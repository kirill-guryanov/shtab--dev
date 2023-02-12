import {addInteractivityToButton} from  "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--about-us",
    ".fillingButton__svg-circle--about-us",
    ".fillingButton__circle--about-us",
    2,
    22,
    0,
    0,
    true,
    "whiteArrow",
    true
  )
})

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--about-us",
    ".fillingButton__svg-circle--about-us",
    ".fillingButton__circle--about-us",
    2,
    22,
    0,
    0,
    false
  )
})