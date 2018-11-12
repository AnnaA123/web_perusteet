let summa;
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const div = document.querySelector('#div');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');


function yht(evt){
  summa = +num1.value + +num2.value;
  document.querySelector('#vastaus').innerHTML ='' + summa + '';
}

function vah(evt){
  summa = +num1.value - +num2.value;
  document.querySelector('#vastaus').innerHTML ='' + summa + '';
}

function kerto(evt){
  summa = +num1.value * +num2.value;
  document.querySelector('#vastaus').innerHTML ='' + summa + '';
}

function jako(evt){
  summa = +num1.value / +num2.value;
  document.querySelector('#vastaus').innerHTML ='' + summa + '';
}

sum.addEventListener('click', yht);
sub.addEventListener('click', vah);
multi.addEventListener('click', kerto);
div.addEventListener('click', jako);

