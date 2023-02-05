window.addEventListener('load', function() {

  const buttonWideHeader = document.querySelector(".about-us__right-side-read-more--wide-screen-header")
  const wideHeaderCircleSvg = document.querySelector(".for-button-hover-svg--wide-screen-header")
  const buttonWideHeaderCircle = document.querySelector(".about-us__right-side-read-more-circle--wide-screen-header")

  wideHeaderCircleSvg.onmousemove = (e) => {
    let x
    let y

    if (window.innerWidth > 1400) {
      x = e.pageX - buttonWideHeader.offsetLeft - buttonWideHeader.offsetParent.offsetLeft
      y = e.pageY- buttonWideHeader.offsetTop - buttonWideHeader.offsetParent.offsetParent.offsetTop
    }

    if (window.innerWidth <= 1400) {
      x = e.pageX - buttonWideHeader.offsetLeft - buttonWideHeader.offsetParent.offsetLeft
      y = e.pageY- buttonWideHeader.offsetTop - buttonWideHeader.offsetParent.offsetParent.offsetTop
    }

    if (window.innerWidth <= 1100) {
      x = e.pageX - buttonWideHeader.offsetLeft - buttonWideHeader.offsetParent.offsetLeft
      y = e.pageY- buttonWideHeader.offsetTop - buttonWideHeader.offsetParent.offsetParent.offsetTop
    }

    buttonWideHeaderCircle.style.setProperty('--x', `${ x }px`)
    buttonWideHeaderCircle.style.setProperty('--y', `${ y }px`)
    buttonWideHeaderCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  const buttonContent = buttonWideHeader.querySelector(".about-us__right-side-read-more-content--wide-screen-header")

  wideHeaderCircleSvg.addEventListener("mousemove", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.add("about-us__right-side-read-more-span--brief")
  })

  wideHeaderCircleSvg.addEventListener("mouseout", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.remove("about-us__right-side-read-more-span--brief")
    buttonWideHeaderCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })

})