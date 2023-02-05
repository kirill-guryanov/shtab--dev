window.addEventListener('load', function() {
  const buttonBriefIntro = document.querySelector(".about-us__right-side-read-more--brief-intro")
  const briefIntroCircleSvg = document.querySelector(".for-button-hover-svg--brief-intro")
  const buttonBriefIntroCircle = document.querySelector(".about-us__right-side-read-more-circle--brief-intro")

  briefIntroCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonBriefIntro.offsetLeft
    const y = e.pageY - buttonBriefIntro.offsetTop

    buttonBriefIntroCircle.style.setProperty('--x', `${ x }px`)
    buttonBriefIntroCircle.style.setProperty('--y', `${ y }px`)
    buttonBriefIntroCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  const buttonContentBriefIntro = buttonBriefIntro.querySelector(".about-us__right-side-read-more-content--brief-intro")

  briefIntroCircleSvg.addEventListener("mousemove", () => {
    const text = buttonContentBriefIntro.querySelector(".about-us__right-side-read-more-span")

    text.classList.add("about-us__right-side-read-more-span--brief")
  })

  briefIntroCircleSvg.addEventListener("mouseleave", () => {
    const text = buttonContentBriefIntro.querySelector(".about-us__right-side-read-more-span")

    text.classList.remove("about-us__right-side-read-more-span--brief")
    buttonBriefIntroCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })

  //  ===========================

  const buttonBrief = document.querySelector(".about-us__right-side-read-more--brief-bottom")
  const briefCircleSvg = document.querySelector(".for-button-hover-svg--brief-bottom")
  const buttonBriefCircle = document.querySelector(".about-us__right-side-read-more-circle--brief-bottom")

  briefCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonBrief.offsetLeft
    const y = e.pageY - buttonBrief.offsetTop - buttonBrief.offsetParent.offsetTop

    buttonBriefCircle.style.setProperty('--x', `${ x }px`)
    buttonBriefCircle.style.setProperty('--y', `${ y }px`)
    buttonBriefCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  const buttonContentBrief = buttonBrief.querySelector(".about-us__right-side-read-more-content--brief-bottom")
  const arrowWhiteBrief = buttonBrief.querySelector(".about-us__right-side-read-more-image--white")
  const arrowBlackBrief = buttonBrief.querySelector(".about-us__right-side-read-more-image--black")

  briefCircleSvg.addEventListener("mousemove", () => {
    const text = buttonContentBrief.querySelector(".about-us__right-side-read-more-span")

    arrowWhiteBrief.classList.add("about-us__right-side-read-more-image--white--hidden")
    arrowBlackBrief.classList.add("about-us__right-side-read-more-image--black--visible")
    text.classList.add("about-us__right-side-read-more-span--brief")
  })

  briefCircleSvg.addEventListener("mouseleave", () => {
    const text = buttonContentBrief.querySelector(".about-us__right-side-read-more-span")

    arrowWhiteBrief.classList.remove("about-us__right-side-read-more-image--white--hidden")
    arrowBlackBrief.classList.remove("about-us__right-side-read-more-image--black--visible")
    text.classList.remove("about-us__right-side-read-more-span--brief")
    buttonBriefCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })
})