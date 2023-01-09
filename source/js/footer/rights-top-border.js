const rights = document.querySelector(".footer__left-side-rights")
const itemForCalibration = document.querySelector(".footer__blocks-item--one")

const itemForCalibrationLeft = itemForCalibration.getBoundingClientRect().left
rights.style.marginLeft = itemForCalibrationLeft + "px"

window.addEventListener("resize", () => {
  const rights = document.querySelector(".footer__left-side-rights")
  const itemForCalibration = document.querySelector(".footer__blocks-item--one")

  const itemForCalibrationLeft = itemForCalibration.getBoundingClientRect().left
  rights.style.marginLeft = itemForCalibrationLeft + "px"
})