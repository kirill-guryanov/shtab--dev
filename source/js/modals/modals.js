document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll(".modalTrigger");
  const wrappers = document.querySelectorAll(".wrapper");
  const modals = document.querySelectorAll(".modal");

  modalTriggers.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", () => {
      modals.forEach((modal) => {
        wrappers.forEach((wrapper) => {
          const isModalTrigger = modalTrigger.dataset.modal;
          const isModal = modal.dataset.modal;
          const isWrapper = wrapper.dataset.modal;

          if (
            isModalTrigger &&
            isWrapper &&
            isModalTrigger === isWrapper &&
            isModalTrigger === isModal
          ) {
            wrapper.classList.add("wrapper--visible");
            modal.classList.add("modal--visible");

            const body = document.querySelector("body");
            body.classList.add("hidden");
          }
        });
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".wrapper");
  const modals = document.querySelectorAll(".modal");

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      wrappers.forEach((wrapper) => {
        modals.forEach((modal) => {
          wrapper.classList.remove("wrapper--visible");
          modal.classList.remove("modal--visible");

          const body = document.querySelector("body");
          body.classList.remove("hidden");
        });
      });
    });

    modals.forEach((modal) => {
      const closeButton = modal.querySelector(".modal__contentCross");

      closeButton.addEventListener("click", () => {
        wrapper.classList.remove("wrapper--visible");
        modal.classList.remove("modal--visible");

        const body = document.querySelector("body");
        body.classList.remove("hidden");
      });
    });
  });
});

document.addEventListener("keyup", (e) => {
  const wrappers = document.querySelectorAll(".wrapper");
  const modals = document.querySelectorAll(".modal");

  wrappers.forEach((wrapper) => {
    modals.forEach((modal) => {
      const visibleWrapper = wrapper.classList.contains("wrapper--visible");
      const visibleModal = modal.classList.contains("modal--visible");

      if (e.key === "Escape" && visibleWrapper && visibleModal) {
        wrapper.classList.remove("wrapper--visible");
        modal.classList.remove("modal--visible");

        const body = document.querySelector("body");
        body.classList.remove("hidden");
      }
    });
  });
});
