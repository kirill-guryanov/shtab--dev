window.addEventListener('load', function() {

  const buttonProducts = document.querySelector(".about-us__right-side-read-more--products")
  const productsBottomCircleSvg = document.querySelector(".for-button-hover-svg--products")
  const buttonProductsCircle = document.querySelector(".about-us__right-side-read-more-circle--products")

  productsBottomCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonProducts.offsetLeft - buttonProducts.offsetParent.offsetLeft
    const y = e.pageY - buttonProducts.offsetTop - buttonProducts.offsetParent.offsetTop

    buttonProductsCircle.style.setProperty('--x', `${ x }px`)
    buttonProductsCircle.style.setProperty('--y', `${ y }px`)
    buttonProductsCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  const buttonContent = buttonProducts.querySelector(".about-us__right-side-read-more-content--products")

  productsBottomCircleSvg.addEventListener("mousemove", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.add("about-us__right-side-read-more-span--brief")
  })

  productsBottomCircleSvg.addEventListener("mouseleave", () => {
    const text = buttonContent.querySelector(".about-us__right-side-read-more-span")

    text.classList.remove("about-us__right-side-read-more-span--brief")
    buttonProductsCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })

})