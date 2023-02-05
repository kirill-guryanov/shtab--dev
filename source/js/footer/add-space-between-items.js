window.addEventListener("load", () => {
  addMarginsBetweenFooterItems()
})

function addMarginsBetweenFooterItems() {
  // to add margins between items
  const itemsParent = document.querySelector(".footer__blocks")

  if (window.innerWidth > 1920) {
    itemsParent.classList.add("footer__blocks--between")
  }
  if (window.innerWidth <= 2340) {
    itemsParent.classList.remove("footer__blocks--between")
  }
  // the same as above on resize
  window.addEventListener('resize', () => {
    const itemsParent = document.querySelector(".footer__blocks")

    if (window.innerWidth > 1920) {
      itemsParent.classList.add("footer__blocks--between")
    }
    if (window.innerWidth <= 2340) {
      itemsParent.classList.remove("footer__blocks--between")
    }
  })
}