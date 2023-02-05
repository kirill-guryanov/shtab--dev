window.addEventListener('load', function() {
  const toBottomArrow = document.querySelector(".intro__arrow-to-bottom-arrow-block")
  const aboutUsTop = document.querySelector(".about-us").offsetTop

  function scrollTo(left, top) {
    const header = document.querySelector(".header--main")
    const headerHeight = header.getBoundingClientRect().height

    const to = top - headerHeight

    window.scroll({
      left: left,
      top: to,
      behavior: "smooth"
    })
  }

  toBottomArrow.addEventListener("click", () => {
    scrollTo(0, aboutUsTop)
  })
})