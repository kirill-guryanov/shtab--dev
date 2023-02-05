window.addEventListener('load', function() {

  const allButtons = document.querySelectorAll(".about-us__right-side-read-more")

  allButtons.forEach(button => {
    const buttonSpan = button.querySelector("span")
    const buttonRightSide = button.querySelector(".about-us__right-side-read-more-content")

    if (buttonSpan) {
      const buttonSpanWidth = buttonSpan.getBoundingClientRect().width

      if (buttonRightSide) {
        buttonRightSide.style.marginLeft = `-${buttonSpanWidth + 3}px`
      }
    }
  })

})