document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll(".modalTrigger");
  const wrappers = document.querySelectorAll(".wrapper");

  modalTriggers.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", () => {
      wrappers.forEach((wrapper) => {
        const isModalTrigger = modalTrigger.dataset.modal;
        const isWrapper = wrapper.dataset.modal;

        if (isModalTrigger && isWrapper && isModalTrigger === isWrapper) {
          wrapper.classList.add("wrapper--visible");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper) => {
    const closeButton = wrapper.querySelector(".modal__contentCross");

    closeButton.addEventListener("click", () => {
      wrapper.classList.remove("wrapper--visible");
    });
  });
});

document.addEventListener("keyup", (e) => {
  const wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper) => {
    const wrapperVisible = wrapper.classList.contains("wrapper--visible");

    if (e.key === "Escape" && wrapperVisible) {
      wrapper.classList.remove("wrapper--visible");
    }
  });
});
