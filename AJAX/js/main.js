'use strict';
const list = document.getElementById('series');
const press = document.getElementById('searchbutton');
const item = document.getElementById('searchtext');

//Etsii sarjat
press.addEventListener('click', (evt) => {
  list.innerHTML = '';
  let searchitem = item.value;
  console.log('http://api.tvmaze.com/search/shows?q=' + searchitem);

  fetch('http://api.tvmaze.com/search/shows?q=' + searchitem)
  .then((response) => {
    return response.json();
  })
  .then((myjson) => {
    /*console.log(JSON.stringify(myjson));*/
    console.log(myjson);
    find(myjson);

  }).catch((error) => {
    console.log(error);
  });

  console.log(searchitem);
});

//Listaa sarjat sivulle
const find = (info) =>
{
  for (let i = 0; i < info.length; i++){
    let newitem = document.createElement('li');

    let pic;
    try {
      pic = info[i].show.image.medium;
    }
    catch(error) {
      console.log(error);
      pic = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    }

    let link = info[i].show.url;
    let nam = info[i].show.name;
    let summ = info[i].show.summary;
    let gen = info[i].show.genres;

    if (summ === null){
      summ = 'No summary available.'
    }

    newitem.innerHTML = '<br>' + '<br><img src="'+ pic +'"><a href="'+ link + '"><h2>' + nam + '</h2></a><p>Genres: ' + gen + '</p>' + summ + '<br>';
    list.appendChild(newitem);
  }
};
