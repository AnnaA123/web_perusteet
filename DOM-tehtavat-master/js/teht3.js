const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


for (let i = 0; i < 5; i++) {
  document.getElementsByTagName('ul')[0].innerHTML += '<li><img src = "' + kuvat[+i] + '" alt = "kuvaa"></li>';
  console.log('aaaaa  ' + i + '');
}

document.getElementsByTagName('ul')[0].setAttribute('class', 'list-type kuva');
