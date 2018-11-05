const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const listaus = document.querySelector('ul');
const lista = document.createElement('li');

for (let i = 0; i < 5; i++) {
  let kuva = document.createElement('img');
  kuva.src = kuvat[i];
  kuva.alt = 'kuvaa';
  lista.appendChild(kuva);
}

listaus.appendChild(lista);

document.getElementsByTagName('ul')[0].setAttribute('class', 'list-type kuva');