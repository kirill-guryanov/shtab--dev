window.addEventListener('load', function() {

  let elements = document.querySelectorAll('.header__nav-item-text');

  elements.forEach(element => {
    let innerText = element.innerText; // услуги
    element.innerHTML = ''; // ""

    let textContainer = document.createElement('div'); // create div
    textContainer.classList.add('block'); // add div to class

    for (let letter of innerText) { // get each letter of innerText (услуги)
      let span = document.createElement('span'); // create span
      span.innerText = letter.trim() === '' ? '\xa0': letter;
      span.classList.add('letter');
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });

})