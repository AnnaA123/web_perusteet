function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function aika() {
  let day = new Date();
  document.querySelector('#kello').innerHTML = '' + addZero(day.getHours()) + ':' + addZero(day.getMinutes()) + ':' + addZero(day.getSeconds());
}

setInterval(aika, 1000);
