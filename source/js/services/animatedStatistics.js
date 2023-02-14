let mainCounter = 0;

window.addEventListener("load", () => {
  if (window.innerWidth > 500) {
    if (mainCounter <= 1) {
      animateNumbers(3);
    }
  } else {
    if (mainCounter <= 100) {
      animateNumbers(3);
    }
  }
});

window.addEventListener("scroll", () => {
  const checkForAnimation = document.querySelector(
    ".statistics__itemNumber.animated"
  );

  if (checkForAnimation) {
    if (window.innerWidth > 500) {
      if (mainCounter <= 1) {
        animateNumbers(3);
      }
    } else {
      if (mainCounter <= 100) {
        animateNumbers(3);
      }
    }
  }
});

function animateNumbers(animeationDurationInSeconds) {
  const itemsForNumberChange = document.querySelectorAll(
    ".statistics__itemNumber.animated"
  );

  const animeationDuration = animeationDurationInSeconds;

  itemsForNumberChange.forEach((itemForNumberChange) => {
    let counter = 1;

    if (itemForNumberChange.dataset.neededAmountWithPlus) {
      const neededAmountWithPlus =
        itemForNumberChange.dataset.neededAmountWithPlus;

      const timeStepNeededAmountWithPlus =
        (1000 * animeationDuration) / neededAmountWithPlus;

      const animate = setInterval(() => {
        if (counter <= neededAmountWithPlus) {
          itemForNumberChange.textContent = `${counter}+`;
        } else {
          clearInterval(animate);
        }

        counter++;
      }, timeStepNeededAmountWithPlus);
    }

    if (itemForNumberChange.dataset.neededAmount) {
      const neededAmount = itemForNumberChange.dataset.neededAmount;

      const timeStep = (1000 * animeationDuration) / neededAmount;

      const animate = setInterval(() => {
        if (counter <= neededAmount) {
          itemForNumberChange.textContent = counter;
        } else {
          clearInterval(animate);
        }

        counter++;
      }, timeStep);
    }
  });

  mainCounter++;
}
