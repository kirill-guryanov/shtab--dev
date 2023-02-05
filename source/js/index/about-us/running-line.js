window.addEventListener('load', function() {

  const whiteLine = document.querySelector(".about-us__running-line-list-white")
  const saladLine = document.querySelector(".about-us__running-line-list-salad")

  const marqueElementsDisplayed = 8

  for (let i = 0; i < marqueElementsDisplayed; i++) {
    saladLine.appendChild(saladLine.children[i].cloneNode(true))
  }

  for (let i = 0; i < marqueElementsDisplayed; i++) {
    whiteLine.prepend(whiteLine.children[i])
  }

})
