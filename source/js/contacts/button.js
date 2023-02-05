window.addEventListener('load', function() {
  const buttonContactsIntro = document.querySelector(".about-us__right-side-read-more--contacts-intro")
  const contactsIntroCircleSvg = document.querySelector(".for-button-hover-svg--contacts-intro")
  const buttonContactsIntroCircle = document.querySelector(".about-us__right-side-read-more-circle--contacts-intro")

  contactsIntroCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonContactsIntro.offsetLeft - buttonContactsIntro.offsetParent.offsetLeft
    const y = e.pageY - buttonContactsIntro.offsetTop - buttonContactsIntro.offsetParent.offsetParent.offsetTop

    buttonContactsIntroCircle.style.setProperty('--x', `${ x }px`)
    buttonContactsIntroCircle.style.setProperty('--y', `${ y }px`)
    buttonContactsIntroCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  contactsIntroCircleSvg.addEventListener("mouseleave", () => {
    buttonContactsIntroCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })
})