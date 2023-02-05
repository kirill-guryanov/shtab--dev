window.addEventListener('load', function() {

  // reviews section splide
  const splide = document.querySelector(".reviews__splide")
  const splideArrows = document.querySelectorAll(".reviews__splide .splide__arrow")
  const splideArrowsArray = Array.from(splideArrows)
  const splideTop = splide.offsetTop
  // title for calibration
  const titleForCalibrationArrows = document.querySelector(".section__titles--reviews")
  const titleForCalibrationArrowsHeight = titleForCalibrationArrows.getBoundingClientRect().height
  const titleForCalibrationArrowsTop = titleForCalibrationArrows.offsetTop / 2

  splideArrowsArray.forEach(splideArrow => {
    splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + 30+ "px"

    if (window.innerWidth <= 620) {
      splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
    }

    if (window.innerWidth <= 530) {
      splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + 115 + "px"
    }
  })

  window.addEventListener("resize", () => {
    // reviews section splide
    const splide = document.querySelector(".reviews__splide")
    const splideArrows = document.querySelectorAll(".reviews__splide .splide__arrow")
    const splideArrowsArray = Array.from(splideArrows)
    const splideTop = splide.offsetTop

    // title for calibration
    const titleForCalibrationArrows = document.querySelector(".section__titles--reviews")
    const titleForCalibrationArrowsHeight = titleForCalibrationArrows.getBoundingClientRect().height
    const titleForCalibrationArrowsTop = titleForCalibrationArrows.offsetTop / 2

    splideArrowsArray.forEach(splideArrow => {
      splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + 30 + "px"

      if (window.innerWidth <= 620) {
        splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + "px"
      }

      if (window.innerWidth <= 530) {
        splideArrow.style.top = titleForCalibrationArrowsHeight + titleForCalibrationArrowsTop - splideTop + 115 + "px"
      }
    })
  })

})