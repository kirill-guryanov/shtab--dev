import {addInteractivityToButton} from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--404",
    ".fillingButton__svg-circle--404",
    ".fillingButton__circle--404",
    2,
    22,
    0,
    0,
    true,
    "blackArrow",
    false
  )
})

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--404",
    ".fillingButton__svg-circle--404",
    ".fillingButton__circle--404",
    2,
    22,
    0,
    0,
    false
  )
})