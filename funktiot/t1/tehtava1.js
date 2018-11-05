function muunnos() {
  let gallonat = prompt('Syötä bensamäärä gallonoina.');
  let litrat = 3.785 * +gallonat;
  document.querySelector('body').innerHTML = '<p>' + gallonat + ' gallonaa on ' + litrat + ' litraa.</p>';
}

muunnos();
