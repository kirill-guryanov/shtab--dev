document.addEventListener("DOMContentLoaded", () => {
  const lineList = document.querySelector(".about-us__running-line-list-white")
  const lineListSalad = document.querySelector(".about-us__running-line-list-salad")

  const body = document.body,
    html = document.documentElement;

  const height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

  const lineListWidth = lineList.getBoundingClientRect().width
  const lineListSaladWidth = lineListSalad.getBoundingClientRect().width

  lineList.style.transform = `translateX(-${window.scrollY * (height / lineListWidth)}px)`
  lineListSalad.style.transform = `translateX(${window.scrollY * (height / lineListSaladWidth)}px)`

  window.addEventListener("scroll", () => {
    lineList.style.transform = `translateX(-${window.scrollY * (height / lineListWidth)}px)`
    lineListSalad.style.transform = `translateX(${window.scrollY * (height / lineListSaladWidth)}px)`
  })
})