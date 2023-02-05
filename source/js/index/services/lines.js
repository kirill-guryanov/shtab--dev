window.addEventListener('load', function() {

  const servicesListTop = document.querySelector(".services__list-block").offsetTop

  const servicesListItemTitleBlock = document.querySelector(".services__list-item-title-for-overflow-line").offsetHeight

  const descriptionLine = document.querySelector(".services__list-item-description-overflow-line")
  const titleLine = document.querySelector(".services__list-item-title-overflow-line")

  const servicesTop = document.querySelector(".services").offsetTop
  const servicesItemDescriptionHeight = document.querySelector(".services__list-item-description").getBoundingClientRect().height

  descriptionLine.style.height = servicesListTop - servicesTop + servicesItemDescriptionHeight + "px"
  titleLine.style.height = servicesListItemTitleBlock + 65 + 102 + 75 + "px"

  if (window.innerWidth <= 780) {
    descriptionLine.style.height = servicesItemDescriptionHeight + "px"
    titleLine.style.height = servicesListItemTitleBlock + "px"
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 780) {
      descriptionLine.style.height = servicesItemDescriptionHeight + "px"
      titleLine.style.height = servicesListItemTitleBlock + "px"
    }
  })

})
