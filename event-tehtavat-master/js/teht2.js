const teksti = document.querySelector('p');
teksti.setAttribute('class','piilota');

function eventti(evt) {
  teksti.setAttribute('class','nayta');
}

function katoa(evt) {
  teksti.setAttribute('class','piilota');
}

const kuva = document.querySelector('img');

kuva.addEventListener('mouseenter', eventti);
kuva.addEventListener('mouseleave', katoa);
