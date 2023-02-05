window.addEventListener('load', function() {

  // preloader parent block
  const preloaderParentBlock = document.querySelector(".preloader")
  // preloaders
  const preloaderOne = document.querySelector(".preloader-one")
  const preloaderTwo = document.querySelector(".preloader-two")
  // preloaders active class
  const preloaderActiveClass = "preloader-item--active"
  // preloader container active class
  const preloaderParentBlockActiveClass = "preloader--active"
  // all <a>
  const allLinkTags = document.querySelectorAll("a")

  allLinkTags.forEach(a => {
    a.addEventListener("click", (event) => {

      event.preventDefault()

      // set preloader container active class
      preloaderParentBlock.classList.add(preloaderParentBlockActiveClass)
      // set preloaders active class
      preloaderOne.classList.add(preloaderActiveClass)
      setTimeout(()=>{
        preloaderTwo.classList.add(preloaderActiveClass)
      }, 2000)

    })
  })

})