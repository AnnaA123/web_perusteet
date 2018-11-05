function itseisarvo(luku) {
   let ia = Math.abs(+luku);
  document.querySelector('body').innerHTML = '<p>Luvun ' + luku + ' itseisarvo on ' + ia + '.</p>';
}

let nro = prompt('Syötä luku.');
itseisarvo(nro);
