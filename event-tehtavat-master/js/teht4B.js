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

document.querySelector('img').setAttribute('id','iso');

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

for (let i = 0; i < pics.length; i++){
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

}
