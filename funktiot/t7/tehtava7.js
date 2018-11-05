function parilliset(luvut) {
  let pari = [];
  let jaa = 0;

  for (let i = 0; i < luvut.length; i++) {
    if (+luvut[+i] % 2 === 0) {
      pari[+jaa] = luvut[+i];
      jaa++;
    }
  }
  document.querySelector('body').innerHTML = '<p>' + pari + '</p>';
}

let maara = prompt('Montako lukua?');
let luku = [];
for (let j = 0; j < +maara; j++) {
  luku[j] = prompt('Syötä luku.');
}

parilliset(luku);
