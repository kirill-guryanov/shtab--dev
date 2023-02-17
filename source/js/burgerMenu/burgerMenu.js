const body = document.querySelector("body");
// console.log(header.style.backgroundColor);
console.log();

const WordToRight = document.querySelector(
  ".burgerMenu__animatedWords_wordToRight"
);
const WordToLeft = document.querySelector(
  ".burgerMenu__animatedWords_wordToLeft"
);

const burger = document.querySelector(".header__burger");

const burgerMenu = document.querySelector(".burgerMenu");
const itemsForHover = document.querySelectorAll(
  ".burgerMenu__contentNavigation-leftSideItem"
);
const rightSide = document.querySelector(
  ".burgerMenu__contentNavigation-rightSide"
);
const itemsForShow = document.querySelectorAll(
  ".burgerMenu__contentNavigation-rightSideList"
);
const closeButton = document.querySelector(".header__closeBurgerMenuBtn");

burger.addEventListener("click", () => {
  body.classList.add("hidden");

  WordToRight.classList.add("burgerMenu__animatedWords_wordToRight--animated");
  WordToLeft.classList.add("burgerMenu__animatedWords_wordToLeft--animated");
  burgerMenu.classList.remove("burgerMenu--closed");
  burgerMenu.classList.add("burgerMenu--visible");
});

document.addEventListener("keyup", (e) => {
  const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

  if (e.key === "Escape" && isVisible) {
    body.classList.remove("hidden");

    WordToRight.classList.remove(
      "burgerMenu__animatedWords_wordToRight--animated"
    );
    WordToLeft.classList.remove(
      "burgerMenu__animatedWords_wordToLeft--animated"
    );
    burgerMenu.classList.remove("burgerMenu--visible");
    burgerMenu.classList.add("burgerMenu--closed");
  }
});

closeButton.addEventListener("click", (e) => {
  const isVisible = burgerMenu.classList.contains("burgerMenu--visible");

  if (isVisible) {
    body.classList.remove("hidden");

    WordToRight.classList.remove(
      "burgerMenu__animatedWords_wordToRight--animated"
    );
    WordToLeft.classList.remove(
      "burgerMenu__animatedWords_wordToLeft--animated"
    );
    burgerMenu.classList.remove("burgerMenu--visible");
    burgerMenu.classList.add("burgerMenu--closed");
  }
});

itemsForHover.forEach((itemForHover) => {
  const imageArrow = itemForHover.querySelector(
    ".burgerMenu__contentNavigation-leftSideItemImage"
  );

  itemForHover.addEventListener("mouseenter", () => {
    const imageArrows = document.querySelectorAll(
      ".burgerMenu__contentNavigation-leftSideItemImage"
    );

    imageArrows.forEach((imageArrowForResetClass) => {
      deleteAnimationClass(
        imageArrowForResetClass,
        "burgerMenu__contentNavigation-leftSideItemImage--visible"
      );
    });

    imageArrow.classList.add(
      "burgerMenu__contentNavigation-leftSideItemImage--visible"
    );
  });
});

setDataAttributes();

// add lister for mouseenter
itemsForHover.forEach((itemForHover) => {
  itemsForShow.forEach((itemForShow) => {
    const showData = itemForShow.dataset.burgerMenuLink;

    itemForHover.addEventListener("mouseenter", (e) => {
      const hoverData = e.target.dataset.burgerMenuLink;

      rightSide.classList.add(
        "burgerMenu__contentNavigation-rightSide--visible"
      );
      // reset animation class on all itemForShow
      deleteAnimationClass(
        itemForShow,
        "burgerMenu__contentNavigation-rightSideList--animated"
      );
      // show dependent list
      if (hoverData === showData) {
        itemForShow.classList.add(
          "burgerMenu__contentNavigation-rightSideList--animated"
        );
      }
    });
  });
});
// utils
function deleteAnimationClass(itemForCheck, className) {
  const isVisible = itemForCheck.classList.contains(className);

  if (isVisible) {
    itemForCheck.classList.remove(className);
  }
}

function setDataAttributes() {
  itemsForHover.forEach((itemForHover, index) => {
    itemForHover.dataset.burgerMenuLink = index;
  });

  itemsForShow.forEach((itemForShow, index) => {
    itemForShow.dataset.burgerMenuLink = index;
  });
}
