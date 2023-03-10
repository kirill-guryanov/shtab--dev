import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  const costsItems = document.querySelectorAll(".modal");
  costsItems.forEach((item) => {
    const one = item.querySelector(".fillingButton--modal");
    const two = item.querySelector(".fillingButton__svg-circle--modal");
    const three = item.querySelector(".fillingButton__circle--modal");

    addInteractivityToButton(
      one,
      two,
      three,
      3,
      33,
      0,
      0,
      true,
      "whiteArrow",
      true,
      [],
      null,
      true
    );
  });
});

window.addEventListener("resize", () => {});
