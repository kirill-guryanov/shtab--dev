window.addEventListener('load', function() {

  const reviews = document.querySelector(".reviews")
  const decorationImage = document.querySelector(".reviews__decoration-text")
  const decorationImageLinesInReviews = document.querySelector(".reviews__decoration-lines")
  const decorationImageLinesInProducts = document.querySelector(".products__decoration-lines")

  const reviewsHeight = reviews.getBoundingClientRect().height
  const decorationImageHeight = decorationImage.getBoundingClientRect().height

  decorationImage.style.top = ( reviewsHeight  - decorationImageHeight ) / 2 + "px"

  window.addEventListener("resize", () => {
    const reviewsHeight = reviews.getBoundingClientRect().height
    const decorationImageHeight = decorationImage.getBoundingClientRect().height

    decorationImage.style.top = ( reviewsHeight  - decorationImageHeight ) / 2 + "px"
  })

  document.addEventListener("DOMContentLoaded", () => {
    decorationImageLinesInProducts.style.left =
      decorationImageLinesInReviews.getBoundingClientRect().left + decorationImageLinesInReviews.getBoundingClientRect().width
      - decorationImageLinesInProducts.getBoundingClientRect().width + "px"
  })

})