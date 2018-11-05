function fibonacci() {
  let monesko = prompt('Monennenko Fibonaccin lukujonossa esiintyvän luvun haluat?');
  let luvut = [];
  luvut[0] = 0;
  let luku = 1;

  for (let i = 1; i < monesko; i++) {
    luvut[i] = luku;
    luku = +luvut[i - 1] + +luvut[i];
  }
  document.querySelector('body').innerHTML = '<p>' + luku + '</p>';
}

fibonacci();