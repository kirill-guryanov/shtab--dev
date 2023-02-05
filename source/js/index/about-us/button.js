window.addEventListener('load', function() {

  const buttonAboutUs = document.querySelector(".about-us__right-side-read-more--about-us")
  const aboutUsCircleSvg = document.querySelector(".for-button-hover-svg--about-us")
  const buttonAboutUsCircle = document.querySelector(".about-us__right-side-read-more-circle--about-us")

  aboutUsCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonAboutUs.offsetLeft - buttonAboutUs.offsetParent.offsetLeft
    const y = e.pageY - buttonAboutUs.offsetTop - buttonAboutUs.offsetParent.offsetParent.offsetTop

    buttonAboutUsCircle.style.setProperty('--x', `${ x }px`)
    buttonAboutUsCircle.style.setProperty('--y', `${ y }px`)
    buttonAboutUsCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  const buttonContent = buttonAboutUs.querySelector(".about-us__right-side-read-more-content--about-us")

  aboutUsCircleSvg.addEventListener("mousemove", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.add("about-us__right-side-read-more-span--brief")
  })

  aboutUsCircleSvg.addEventListener("mouseleave", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.remove("about-us__right-side-read-more-span--brief")
    buttonAboutUsCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })

})