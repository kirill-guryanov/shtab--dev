import {addInteractivityToButton} from  "../../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--blog-top",
    ".fillingButton__svg-circle--blog-top",
    ".fillingButton__circle--blog-top",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    false
  )
  addInteractivityToButton(
    ".fillingButton--blog-telegram",
    ".fillingButton__svg-circle--blog-telegram",
    ".fillingButton__circle--blog-telegram",
    2,
    2,
    0,
    0,
    true,
    "assets/images/utils/telegram.svg",
    false,
    [31, 25]
  )
})

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--blog-top",
    ".fillingButton__svg-circle--blog-top",
    ".fillingButton__circle--blog-top",
    2,
    2,
    0,
    0,
    false
  )
  addInteractivityToButton(
    ".fillingButton--blog-telegram",
    ".fillingButton__svg-circle--blog-telegram",
    ".fillingButton__circle--blog-telegram",
    2,
    2,
    0,
    0,
    false
  )
})