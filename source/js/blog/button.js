window.addEventListener('load', function() {

  const buttonBlog = document.querySelector(".about-us__right-side-read-more-circle--blog")

  buttonBlog.onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

  const buttonBlogTelegram = document.querySelector(".blog__telegram__right-side-read-more-circle")

  buttonBlogTelegram.onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

})