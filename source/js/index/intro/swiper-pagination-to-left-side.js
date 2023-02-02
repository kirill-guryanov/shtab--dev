document.addEventListener("DOMContentLoaded", () => {

  const introTitle = document.querySelector(".intro__content-top-title--for-pagination-calibration")

  const paginationContainer = document.querySelector(".intro__splider--container")
  const pagination = paginationContainer.querySelector(".splide__pagination")
  const paginationBullets = pagination.querySelectorAll("li")

  const paginationLeft = pagination.getBoundingClientRect().left
  const introTitleLeft = introTitle.getBoundingClientRect().left
  const introTitleTop = introTitle.getBoundingClientRect().top

  paginationBullets.forEach((bullet, index) => {
    bullet.style.left = introTitleLeft - 150 + "px"
    bullet.style.top = introTitleTop - 30 + "px"

    if (window.innerWidth <= 1640) {
      bullet.style.left = introTitleLeft - 50 + "px"
      bullet.style.top = introTitleTop - 30 + "px"
    }

    if (window.innerWidth <= 1380) {
      bullet.style.left = introTitleLeft - 150 + "px"
      bullet.style.top = introTitleTop - 135 + "px"
    }

    if (window.innerWidth <= 875) {
      bullet.style.left = introTitleLeft - 35 + "px"
      bullet.style.top = introTitleTop - 150 + "px"
    }

    if (window.innerWidth <= 860) {
      bullet.style.left = introTitleLeft - 35 + "px"
      bullet.style.top = introTitleTop - 70 + "px"
    }

    if (window.innerWidth <= 500) {
      bullet.style.display = "none"
    }
  })

  window.addEventListener("resize", () => {
    const introTitle = document.querySelector(".intro__content-top-title--for-pagination-calibration")

    const paginationContainer = document.querySelector(".intro__splider--container")
    const pagination = paginationContainer.querySelector(".splide__pagination")
    const paginationBullets = pagination.querySelectorAll("li")

    const paginationLeft = pagination.getBoundingClientRect().left
    const introTitleLeft = introTitle.getBoundingClientRect().left
    const introTitleTop = introTitle.getBoundingClientRect().top

    paginationBullets.forEach((bullet, index) => {
      bullet.style.left = introTitleLeft - 150 + "px"
      bullet.style.top = introTitleTop - 30 + "px"

      if (window.innerWidth <= 1640) {
        bullet.style.left = introTitleLeft - 50 + "px"
        bullet.style.top = introTitleTop - 30 + "px"
      }

      if (window.innerWidth <= 1380) {
        bullet.style.left = introTitleLeft - 150 + "px"
        bullet.style.top = introTitleTop - 135 + "px"
      }

      if (window.innerWidth <= 875) {
        bullet.style.left = introTitleLeft - 35 + "px"
        bullet.style.top = introTitleTop - 150 + "px"
      }

      if (window.innerWidth <= 860) {
        bullet.style.left = introTitleLeft - 35 + "px"
        bullet.style.top = introTitleTop - 70 + "px"
      }

      if (window.innerWidth <= 500) {
        bullet.style.display = "none"
      }
    })
  })
})