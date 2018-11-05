function suurin(luku1, luku2, luku3) {
  let isoin = [luku1, luku2, luku3];
  isoin.sort();
  document.querySelector('body').innerHTML = '<p>' + isoin[2] + ' on suurin.</p>';
}

let luvut = [];
for (let i = 0; i < 3; i++) {
  luvut[i] = prompt('Syötä ' + (+i + 1) + '. luku.');
}

suurin(luvut[0], luvut[1], luvut[2]);
