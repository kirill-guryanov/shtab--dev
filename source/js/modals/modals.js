document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll(".modalTrigger");
  const wrappers = document.querySelectorAll(".wrapper");
  //   const modals = document.querySelectorAll(".modal");
  // add form submisson with validation
  wrappers.forEach((wrapper) => {
    const button = wrapper.querySelector(".fillingButton");
    const form = wrapper.querySelector("form");

    const inputs = form.querySelectorAll("input");

    button.addEventListener("click", () => {
      inputs.forEach((input) => {
        if (input.value !== "" || input.value.length > 3) {
          form.submit();
        }
      });
    });
  });
  //
  modalTriggers.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", () => {
      //   modals.forEach((modal) => {
      wrappers.forEach((wrapper) => {
        const isModalTrigger = modalTrigger.dataset.modal;
        // const isModal = modal.dataset.modal;
        const isWrapper = wrapper.dataset.modal;

        if (isModalTrigger && isWrapper && isModalTrigger === isWrapper) {
          wrapper.classList.add("wrapper--visible");
          //   modal.classList.add("modal--visible");

          const body = document.querySelector("body");
          body.classList.add("hidden");
        }
      });
    });
    // });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".wrapper");
  //   const modals = document.querySelectorAll(".modal");

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (e) => {
      if (e.target === wrapper) {
        wrappers.forEach((wrapper) => {
          //   modals.forEach((modal) => {
          wrapper.classList.remove("wrapper--visible");
          // modal.classList.remove("modal--visible");

          const body = document.querySelector("body");
          body.classList.remove("hidden");
        });
        // });
      }
    });

    // modals.forEach((modal) => {
    const closeButton = wrapper.querySelector(".modal__contentCross");

    closeButton.addEventListener("click", () => {
      wrapper.classList.remove("wrapper--visible");
      // modal.classList.remove("modal--visible");

      const body = document.querySelector("body");
      body.classList.remove("hidden");
    });
    // });
  });
});

document.addEventListener("keyup", (e) => {
  const wrappers = document.querySelectorAll(".wrapper");
  //   const modals = document.querySelectorAll(".modal");

  wrappers.forEach((wrapper) => {
    // modals.forEach((modal) => {
    const visibleWrapper = wrapper.classList.contains("wrapper--visible");
    //   const visibleModal = modal.classList.contains("modal--visible");

    if (e.key === "Escape" && visibleWrapper) {
      wrapper.classList.remove("wrapper--visible");
      // modal.classList.remove("modal--visible");

      const body = document.querySelector("body");
      body.classList.remove("hidden");
    }
  });
  //   });
});
