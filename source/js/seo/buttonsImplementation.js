import { addInteractivityToButton } from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    2,
    2,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // costsFooterItem
  addInteractivityToButton(
    ".fillingButton--costsFooterItem",
    ".fillingButton__svg-circle--costsFooterItem",
    ".fillingButton__circle--costsFooterItem",
    2,
    2,
    0,
    0,
    true,
    "whiteArrow",
    true
  );
  // benefitsBottom
  addInteractivityToButton(
    ".fillingButton--benefitsBottom",
    ".fillingButton__svg-circle--benefitsBottom",
    ".fillingButton__circle--benefitsBottom",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    true
  );
  // benefitsRight
  addInteractivityToButton(
    ".fillingButton--benefitsRight",
    ".fillingButton__svg-circle--benefitsRight",
    ".fillingButton__circle--benefitsRight",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    true
  );
  // answersQuestions
  addInteractivityToButton(
    ".fillingButton--answersQuestions",
    ".fillingButton__svg-circle--answersQuestions",
    ".fillingButton__circle--answersQuestions",
    2,
    2,
    0,
    0,
    true,
    "blackArrow",
    false
  );
  // costsItem
  const costsItems = document.querySelectorAll(".costs__contentBottomItem");
  costsItems.forEach((item) => {
    const one = item.querySelector(".fillingButton--costsItem");
    const two = item.querySelector(".fillingButton__svg-circle--costsItem");
    const three = item.querySelector(".fillingButton__circle--costsItem");

    addInteractivityToButton(
      one,
      two,
      three,
      2,
      2,
      0,
      0,
      true,
      "blackArrow",
      false,
      [],
      null,
      true
    );
  });
});

window.addEventListener("resize", () => {
  // intro bottom
  addInteractivityToButton(
    ".fillingButton--introBottom",
    ".fillingButton__svg-circle--introBottom",
    ".fillingButton__circle--introBottom",
    2,
    2,
    0,
    0,
    false
  );
  // costsFooterItem
  addInteractivityToButton(
    ".fillingButton--costsFooterItem",
    ".fillingButton__svg-circle--costsFooterItem",
    ".fillingButton__circle--costsFooterItem",
    2,
    2,
    0,
    0,
    false
  );
  // benefitsBottom
  addInteractivityToButton(
    ".fillingButton--benefitsBottom",
    ".fillingButton__svg-circle--benefitsBottom",
    ".fillingButton__circle--benefitsBottom",
    2,
    2,
    0,
    0,
    false
  );
  // benefitsRight
  addInteractivityToButton(
    ".fillingButton--benefitsRight",
    ".fillingButton__svg-circle--benefitsRight",
    ".fillingButton__circle--benefitsRight",
    2,
    2,
    0,
    0,
    false
  );
  // answersQuestions
  addInteractivityToButton(
    ".fillingButton--answersQuestions",
    ".fillingButton__svg-circle--answersQuestions",
    ".fillingButton__circle--answersQuestions",
    2,
    2,
    0,
    0,
    false
  );
  // costsItem
  const costsItems = document.querySelectorAll(".costs__contentBottomItem");
  costsItems.forEach((item) => {
    const one = item.querySelector(".fillingButton--costsItem");
    const two = item.querySelector(".fillingButton__svg-circle--costsItem");
    const three = item.querySelector(".fillingButton__circle--costsItem");

    addInteractivityToButton(
      one,
      two,
      three,
      2,
      2,
      0,
      0,
      false,
      null,
      false,
      [],
      null,
      true
    );
  });
});
