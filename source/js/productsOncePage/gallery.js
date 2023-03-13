if (window.innerWidth > 550) {
  const items = document.querySelectorAll(".galleryItem");
  window.addEventListener("load", () => {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const image = item.querySelector("img");
        const imageSource = image.getAttribute("src");

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.innerHTML = `
              <div class="galleryContainer">
                  <div class="galleryCrossWrapper">
                      <img class="galleryCross" src="assets/images/utils/whiteCross.svg">
                  </div>
                  <img class="galleryItem" src=${imageSource} alt="Отзыв">
              </div>
          `;

        const body = document.querySelector("body");
        document.body.append(wrapper);
        body.classList.add("hidden");

        const customImage = wrapper.querySelector(".galleryItem");
        if (window.innerWidth > 650) {
          customImage.style.width = window.innerWidth / 2.5 + "px";
        } else if (window.innerWidth > 550) {
          customImage.style.width = window.innerWidth / 1.4 + "px";
        }

        const cross = wrapper.querySelector(".galleryCross");
        if (window.innerWidth > 650) {
          cross.style.width = window.innerWidth / 99 + "px";
        } else {
          cross.style.width = window.innerWidth / 40 + "px";
        }

        const crossWrapper = wrapper.querySelector(".galleryCrossWrapper");
        crossWrapper.style.marginLeft = window.innerWidth / 99 + 60 + "px";

        setTimeout(() => {
          wrapper.classList.add("wrapper--visible", "wrapper--gallery");
        }, 150);

        const container = wrapper.querySelector(".galleryContainer");
        setTimeout(() => {
          if (
            container.offsetTop < 0 &&
            item.classList.contains("galleryItem--highest") &&
            window.innerWidth > 700
          ) {
            container.style.marginTop =
              Math.abs(container.offsetTop) + 400 + "px";
          }
          if (
            window.innerWidth < 700 &&
            item.classList.contains("galleryItem--highest")
          ) {
            container.style.marginTop =
              Math.abs(container.offsetTop) + 200 + "px";
          }
          if (
            container.offsetTop < 0 &&
            !item.classList.contains("galleryItem--highest")
          ) {
            container.style.marginTop =
              Math.abs(container.offsetTop) + 200 + "px";
          }
        }, 150);

        const closeButton = wrapper.querySelector(".galleryCross");

        closeButton.addEventListener("click", () => {
          wrapper.classList.remove("wrapper--visible");

          const body = document.querySelector("body");
          body.classList.remove("hidden");
        });

        wrapper.addEventListener("click", (e) => {
          if (e.target === wrapper) {
            wrapper.classList.remove("wrapper--visible");
            const body = document.querySelector("body");
            body.classList.remove("hidden");
          }
        });
      });
    });
  });
}
