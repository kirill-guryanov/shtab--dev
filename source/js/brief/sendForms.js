let form = document.querySelector(".forms__form");
let button = document.querySelector(".fillingButton--brief-bottom");

button.addEventListener("click", function (event) {
  form.submit();
});
