const body = document.querySelector("body")

const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active")

  if(nav.classList.contains("header__nav--active")) {
    body.classList.add("body--hidden")
  }
  if(!nav.classList.contains("header__nav--active")) {
    body.classList.remove("body--hidden")
  }
})