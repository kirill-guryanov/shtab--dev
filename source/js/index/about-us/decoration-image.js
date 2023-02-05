window.addEventListener('load', function() {

  const aboutUs = document.querySelector(".about-us")
  const decorationImageLeft = document.querySelector(".about-us__decoration-image--left")
  const decorationImageRight = document.querySelector(".about-us__decoration-image--right")

  const aboutUsHeight = aboutUs.getBoundingClientRect().height
  const decorationImageLeftHeight = decorationImageLeft.getBoundingClientRect().height
  const decorationImageRightHeight = decorationImageRight.getBoundingClientRect().height

  decorationImageLeft.style.top = ( aboutUsHeight  - decorationImageLeftHeight ) / 2 + "px"
  decorationImageRight.style.top = ( aboutUsHeight  - decorationImageRightHeight  ) / 3.5 + "px"

  window.addEventListener("resize", () => {
    const aboutUsHeight = aboutUs.getBoundingClientRect().height
    const decorationImageLeftHeight = decorationImageLeft.getBoundingClientRect().height

    decorationImageLeft.style.top = ( aboutUsHeight  - decorationImageLeftHeight ) / 2 + "px"
  })

  window.addEventListener("resize", () => {
    const aboutUsHeight = aboutUs.getBoundingClientRect().height
    const decorationImageRightHeight = decorationImageRight.getBoundingClientRect().height

    decorationImageRight.style.top = ( aboutUsHeight  - (decorationImageRightHeight * 2) ) / 2 + "px"
  })

})