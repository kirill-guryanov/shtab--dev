window.addEventListener('load', function() {
  const buttonBlogOncePage = document.querySelector(".about-us__right-side-read-more-once-page")
  const blogOncePageCircleSvg = document.querySelector(".for-button-hover-svg--blog-once-page")
  const buttonBlogOncePageCircle = document.querySelector(".about-us__right-side-read-more-circle--blog-once-page")

  blogOncePageCircleSvg.onmousemove = (e) => {
    const x = e.pageX - buttonBlogOncePage.offsetLeft - buttonBlogOncePage.offsetParent.offsetLeft
    const y = e.pageY - buttonBlogOncePage.offsetTop - buttonBlogOncePage.offsetParent.offsetParent.offsetTop

    buttonBlogOncePageCircle.style.setProperty('--x', `${ x }px`)
    buttonBlogOncePageCircle.style.setProperty('--y', `${ y }px`)
    buttonBlogOncePageCircle.classList.add("about-us__right-side-read-more-circle--active")
  }

  blogOncePageCircleSvg.addEventListener("mouseleave", () => {
    buttonBlogOncePageCircle.classList.remove("about-us__right-side-read-more-circle--active")
  })
})