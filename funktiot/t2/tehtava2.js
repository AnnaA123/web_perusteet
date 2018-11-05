function muunnos(gallonat) {
  let litrat = 3.785 * +gallonat;
  document.querySelector('body').innerHTML = '<p>' + gallonat + ' gallonaa on ' + litrat + ' litraa.</p>';
}

let gallona = prompt('Syötä bensamäärä gallonoina.');
muunnos(gallona);
