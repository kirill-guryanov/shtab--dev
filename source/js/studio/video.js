window.addEventListener("load", () => {
  const aboutSection = document.querySelector(".about");
  const videoWrapper = document.querySelector(".intro__videoBlockVideoWrapper");
  const wrapperHeight = videoWrapper.getBoundingClientRect().height;

  if (window.innerWidth > 800) {
    aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
  } else {
    aboutSection.style.marginTop = `${0}px`;
  }
});

window.addEventListener("resize", () => {
  const aboutSection = document.querySelector(".about");
  const videoWrapper = document.querySelector(".intro__videoBlockVideoWrapper");
  const wrapperHeight = videoWrapper.getBoundingClientRect().height;

  if (window.innerWidth > 800) {
    aboutSection.style.marginTop = `${wrapperHeight / 2}px`;
  } else {
    aboutSection.style.marginTop = `${0}px`;
  }
});
