window.addEventListener('load', function() {
  const button404 = document.querySelector(".about-us__right-side-read-more--intro404")
  const aboutUsCircleSvg = document.querySelector(".for-button-hover-svg--intro404")
  const button404Circle = document.querySelector(".about-us__right-side-read-more-circle--intro404")

  aboutUsCircleSvg.onmousemove = (e) => {
    const x = e.pageX - button404.offsetLeft - button404.offsetParent.offsetLeft
    const y = e.pageY - button404.offsetTop - button404.offsetParent.offsetParent.offsetTop

    button404Circle.style.setProperty('--x', `${ x }px`)
    button404Circle.style.setProperty('--y', `${ y }px`)
    button404Circle.classList.add("about-us__right-side-read-more-circle--active")
  }

  aboutUsCircleSvg.addEventListener("mouseleave", () => {
    button404Circle.classList.remove("about-us__right-side-read-more-circle--active")
  })
})