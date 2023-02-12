// window.addEventListener('load', function() {
//
//   // telegram button
//   const buttonBlogTelegram = document.querySelector(".about-us__right-side-read-more--blog-telegram")
//   const blogTelegramBottomCircleSvg = document.querySelector(".for-button-hover-svg--blog-telegram")
//   const buttonBlogTelegramCircle = document.querySelector(".about-us__right-side-read-more-circle--blog-telegram")
//
//   blogTelegramBottomCircleSvg.onmousemove = (e) => {
//     const x = e.pageX - buttonBlogTelegram.offsetLeft - buttonBlogTelegram.offsetParent.offsetLeft
//     const y = e.pageY - buttonBlogTelegram.offsetTop - buttonBlogTelegram.offsetParent.offsetTop
//
//     buttonBlogTelegramCircle.style.setProperty('--x', `${ x }px`)
//     buttonBlogTelegramCircle.style.setProperty('--y', `${ y }px`)
//     buttonBlogTelegramCircle.classList.add("about-us__right-side-read-more-circle--active")
//   }
//
//   blogTelegramBottomCircleSvg.addEventListener("mouseleave", () => {
//     buttonBlogTelegramCircle.classList.remove("about-us__right-side-read-more-circle--active")
//   })
// // top button
//   const buttonBlogTop = document.querySelector(".about-us__right-side-read-more--blog-top")
//   const blogTopBottomCircleSvg = document.querySelector(".for-button-hover-svg--blog-top")
//   const buttonBlogTopCircle = document.querySelector(".about-us__right-side-read-more-circle--blog-top")
//
//   blogTopBottomCircleSvg.onmousemove = (e) => {
//     const x = e.pageX - buttonBlogTop.offsetLeft - buttonBlogTop.offsetParent.offsetLeft
//     const y = e.pageY - buttonBlogTop.offsetTop - buttonBlogTop.offsetParent.offsetTop
//
//     buttonBlogTopCircle.style.setProperty('--x', `${ x }px`)
//     buttonBlogTopCircle.style.setProperty('--y', `${ y }px`)
//     buttonBlogTopCircle.classList.add("about-us__right-side-read-more-circle--active")
//   }
//
//   blogTopBottomCircleSvg.addEventListener("mouseleave", () => {
//     buttonBlogTopCircle.classList.remove("about-us__right-side-read-more-circle--active")
//   })
//
// })