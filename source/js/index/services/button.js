window.addEventListener('load', function() {

  const buttonServices = document.querySelector(".about-us__right-side-read-more--services-bottom")
  const servicesBottomCircleSvg = document.querySelector(".for-button-hover-svg--services-bottom")
  const buttonServicesCircle = document.querySelector(".services__read-more-circle--services-bottom")

  servicesBottomCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonServices.offsetLeft - buttonServices.offsetParent.offsetLeft
    const y = e.pageY - buttonServices.offsetTop - buttonServices.offsetParent.offsetTop

    buttonServicesCircle.style.setProperty('--x', `${ x }px`)
    buttonServicesCircle.style.setProperty('--y', `${ y }px`)
    buttonServicesCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  servicesBottomCircleSvg.addEventListener("mouseleave", () => {
    buttonServicesCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })

})