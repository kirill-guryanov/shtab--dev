window.addEventListener('load', function() {

  const headerBurger = document.querySelector(".header__burger")
  const html = document.querySelector("html")
  const wideScreenBurgerButtonClose = document.querySelector(".wide-screen-burger--close-button")

  headerBurger.addEventListener("click", () => {
    const wrapperWideScreenBurger = document.querySelector(".wrapper--wide-screen-burger")
    const html = document.querySelector("html")

    wrapperWideScreenBurger.classList.add("wrapper--wide-screen-burger--active")
    html.classList.add("menu-open")
    html.classList.add("lock")
  })

  wideScreenBurgerButtonClose.addEventListener("click", () => {
    const wrapperWideScreenBurger = document.querySelector(".wrapper--wide-screen-burger")

    if (wrapperWideScreenBurger.classList.contains("wrapper--wide-screen-burger--active")) {
      wrapperWideScreenBurger.classList.remove("wrapper--wide-screen-burger--active")
    }
  })

})