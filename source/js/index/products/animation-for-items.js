// const item = document.querySelector(".products__gallery-items-column-item")
// const items = document.querySelectorAll(".products__gallery-items-column-item")
// const itemsArray = Array.from(items)
//
// itemsArray.forEach(item => {
//   let itemOffsetHeight = item.offsetHeight - 200
//   let itemOffsetTop = item.offsetTop
//   let itemParentOffset = item.offsetParent.offsetTop
//   let amountOfItemOffsetTopAndItemOffsetParentTop = itemOffsetTop + itemParentOffset
//   let amountOfItemOffsetTopAndItemOffsetParentTopForOpacity = itemOffsetTop + itemParentOffset - 250
//   let amountOfItemOffsetTopAndItemOffsetParentTopWithItemOffsetHeight = itemOffsetTop + itemParentOffset + itemOffsetHeight
//   let amountOfItemOffsetTopAndItemOffsetParentTopWithItemOffsetHeightForTranslate = itemOffsetTop + itemParentOffset + itemOffsetHeight + 50
//
//   window.addEventListener("scroll", () => {
//     let currentViewportPosition = window.scrollY + window.innerHeight
//     let scrolledFromTopOfElementToBottom = currentViewportPosition - amountOfItemOffsetTopAndItemOffsetParentTop
//     let scrolledFromTopOfElementToBottomPercentForRotate = scrolledFromTopOfElementToBottom * .2
//     let scrolledFromTopOfElementToBottomPercentForTranslateY = scrolledFromTopOfElementToBottom *  .2
//     let scrolledFromTopOfElementToBottomPercentForOpacity = scrolledFromTopOfElementToBottom * .002
//
//     if (currentViewportPosition >= amountOfItemOffsetTopAndItemOffsetParentTop) {
//       item.style.setProperty(
//         "transform",
//         `perspective(360px) rotateX(-${scrolledFromTopOfElementToBottomPercentForRotate - 70}deg) translateY(${scrolledFromTopOfElementToBottomPercentForTranslateY - 120}px)`)
//     }
//
//     if (currentViewportPosition >= amountOfItemOffsetTopAndItemOffsetParentTopForOpacity) {
//       setTimeout(() => {
//         item.style.setProperty(
//           "opacity",
//           `${scrolledFromTopOfElementToBottomPercentForOpacity}`)
//       }, 500)
//     }
//
//     if (currentViewportPosition >= amountOfItemOffsetTopAndItemOffsetParentTopWithItemOffsetHeight) {
//       item.style.setProperty("transform", `perspective(360px) rotateX(0deg) translateY(${scrolledFromTopOfElementToBottomPercentForTranslateY - 120}px)`)
//     }
//
//     if (currentViewportPosition < amountOfItemOffsetTopAndItemOffsetParentTopWithItemOffsetHeight) {
//       item.style.setProperty("transform", `perspective(360px) rotateX(70deg) translateY(200px)`)
//       item.style.setProperty(
//         "opacity",
//         `0`)
//     }
//
//     if (currentViewportPosition >= amountOfItemOffsetTopAndItemOffsetParentTopWithItemOffsetHeightForTranslate) {
//       item.style.setProperty("transform", `perspective(360px) rotateX(0deg) translateY(0px)`)
//       // item.style.setProperty(
//       //   "opacity",
//       //   `1`)
//     }
//   })
// })