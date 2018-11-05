function vastaluvuksi(luvut) {
  for (let i = 0; i < luvut.length; i++) {
    luvut[i] = -1 * +luvut[i];
  }
}

let taulukko = [];
let maara = prompt('Montako lukua?');

for (let j = 0; j < maara; j++){
  taulukko[j] = prompt('Syötä luku.');
}

vastaluvuksi(taulukko);