
//Tehtävä 1: muuta strawberryn tausta punaiseksi
const t1 = document.getElementById('berry').innerHTML = '<li id="berry" class="red">Strawberry</li>';
console.log('-> ' + t1 + '\n-> I found the berry: Strawberry');


//Tehtävä2: muuta orangen tausta oranssiksi
const t2 = document.querySelector('li[data-foodtype=squishy]').setAttribute('class','orange');
console.log('-> ' + t2 + '\n-> I found the fruit: Orange');


//Tehtävä 3 for-luuppi
const t3 = document.getElementsByTagName('li');

for (let i = 0; i < t3.length; i++){
  t3[i].style.width = '100px';
  t3[i].style.listStyle = 'none';
  t3[3].style.backgroundColor ='Green';
}
console.log('-> ' + t3 + '\n');


//Tehtävä 4: forEach borders

const t4 = document.querySelectorAll('li');
console.log('-> ' + t4 + '\n');

t4.forEach((list) => {
  list.style.border = 'solid';
  console.log(list);
});
