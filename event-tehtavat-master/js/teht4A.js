const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://placekitten.com/100/100/',
    big: 'http://placekitten.com//640/480/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

document.querySelector('#iso').addEventListener('click', function() {
  document.querySelector('div').setAttribute('class', 'hidden');
});

document.querySelector(
    'body').innerHTML += '<ul><li id="kuva1"></li><li id="kuva2"></li><li id="kuva3"></li></ul>';
document.querySelector('#kuva1').innerHTML = '<img src="' + pics[0].thumb +
    '" id="img1">';
document.querySelector('#kuva2').innerHTML = '<img src="' + pics[1].thumb +
    '" id="img2">';
document.querySelector('#kuva3').innerHTML = '<img src= "' + pics[2].thumb +
    '" id="img3">';

console.log(document.querySelector('#img1'));

document.querySelector('#img1').addEventListener('click', function() {
  console.log(document.querySelector('#modal'));
  document.querySelector('div').setAttribute('class', 'visible');
  document.querySelector('#iso').setAttribute('src', pics[0].big);
});
document.querySelector('#img2').addEventListener('click', function() {
  document.querySelector('div').setAttribute('class', 'visible');
  document.querySelector('#iso').setAttribute('src', pics[1].big);
});
document.querySelector('#img3').addEventListener('click', function() {
  document.querySelector('div').setAttribute('class', 'visible');
  document.querySelector('#iso').setAttribute('src', pics[2].big);
});

/*for (let i = 0; i < pics.length; i++){
  let pic = pics[i].thumb;
  const list = document.createElement('li');
  ul.appendChild(list);
  list.setAttribute('id','lista' + i + '');
  const kuva = document.createElement('img');
  list.appendChild(kuva);
  kuva.setAttribute('src', pics[i].thumb);

  list.addEventListener('click', function() {
    document.querySelector('div').setAttribute('class','visible');
    document.querySelector('#iso').setAttribute('src', pics[i].big);
  });

  document.querySelector('#iso').addEventListener('click', function() {
    document.querySelector('div').setAttribute('class','hidden');
  });
}*/
