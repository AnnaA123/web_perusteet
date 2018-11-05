function liita(taulukko) {
  let jono = '';
  for (let i = 0; i < taulukko.length; i++) {
    jono += taulukko[i];
  }
  document.querySelector('body').innerHTML = '<p>' + jono + '</p>';
}

let maara = prompt('Montako nimeä?');
let nimet = [];
for (let j = 0; j < +maara; j++) {
  nimet[j] = prompt('Syötä ' + (j + 1) + '. nimi.');
}

liita(nimet);
