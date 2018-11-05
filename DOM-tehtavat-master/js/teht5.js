
function aika() {
  //let klo = new Date();
  document.querySelector('#kello').innerHTML = '' + new Date() + '';
}

setInterval(aika, 1000);
