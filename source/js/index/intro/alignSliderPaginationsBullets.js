window.addEventListener('load', function() {
  changeSliderBulletsPosition()

  window.addEventListener("resize", () => {
    changeSliderBulletsPosition()
  })
})

// function for align bullets
function changeSliderBulletsPosition() {
  const introTitle = document.querySelector(".intro__content-top-title--for-pagination-calibration")
  const digitalTitle = document.querySelector(".intro__content-digital-block--for-pagination-calibration")

  const paginationContainer = document.querySelector(".intro__splider--container")
  const pagination = paginationContainer.querySelector(".splide__pagination")
  const paginationWidth = pagination.getBoundingClientRect().width
  const paginationBullets = pagination.querySelectorAll("li")

  // const paginationLeft = pagination.getBoundingClientRect().left
  const introTitleLeft = introTitle.getBoundingClientRect().left
  const introTitleTop = introTitle.getBoundingClientRect().top

  // digital
  const digitalTitleLeft = digitalTitle.getBoundingClientRect().left
  const digitalTitleTop = digitalTitle.getBoundingClientRect().top
  const digitalTitleWidth = digitalTitle.getBoundingClientRect().width
  const digitalTitleHeight = digitalTitle.getBoundingClientRect().height

  paginationBullets.forEach((bullet, index) => {
    bullet.style.left = introTitleLeft - 150 + "px"
    bullet.style.top = introTitleTop - 30 + "px"

    if (window.innerWidth <= 1640) {
      bullet.style.left = introTitleLeft - 50 + "px"
      bullet.style.top = introTitleTop - 30 + "px"
    }

    if (window.innerWidth <= 1366) {
      bullet.style.left = introTitleLeft - 85 + "px"
      bullet.style.top = introTitleTop - 50 + "px"
    }

    if (window.innerWidth <= 1239) {
      bullet.style.left = introTitleLeft - 50 + "px"
      bullet.style.top = introTitleTop - 50 + "px"
    }

    if (window.innerWidth <= 1024) {
      bullet.style.left = introTitleLeft - 35 + "px"
      bullet.style.top = introTitleTop - 50 + "px"
    }

    if (window.innerWidth <= 854) {
      bullet.style.left = digitalTitleLeft + digitalTitleWidth - paginationWidth + "px"
      bullet.style.top = digitalTitleTop - 65 - 2 + "px"
      // bullet.style.top = introTitleTop - 150 + "px"
    }

    if (window.innerWidth <= 620) {
      bullet.style.left = digitalTitleLeft + digitalTitleWidth - paginationWidth + "px"
      bullet.style.top = digitalTitleTop - 15 + "px"
      // bullet.style.top = introTitleTop - 150 + "px"
    }

    if (window.innerWidth <= 480) {
      bullet.style.left = digitalTitleLeft + digitalTitleWidth - paginationWidth + "px"
      bullet.style.top = digitalTitleTop - 13 + "px"
      // bullet.style.top = introTitleTop - 150 + "px"
    }

    if (window.innerWidth <= 390) {
      bullet.style.left = digitalTitleLeft + digitalTitleWidth - paginationWidth + "px"
      bullet.style.top = digitalTitleTop - 51 + "px"
      // bullet.style.top = introTitleTop - 150 + "px"
    }
  })
}