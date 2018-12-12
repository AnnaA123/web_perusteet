const fiidi = document.querySelector('#feed');
const personalfiidi = document.querySelector('#personalfeed');
const nimi = document.querySelector('#profileName');
const pnimi = document.querySelector('#pnimi');
const pkuvaus = document.querySelector('#kuvaus');
const haku = document.querySelector('#phaku');

const pikkuprofiili = document.querySelector('#sprofilepic');

const profiilinappi = document.querySelector('#myprofile');
let kayttaja = null;

let userID = document.cookie.split('=')[1];
console.log('user id ' + userID);

const haeKuvat = () => {
  console.log('haekuvat kutsuttu');

  fetch('./images').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    fiidi.innerHTML = '';
    for (let i = 0; i < json.length; i++) {
      fiidi.innerHTML += `<li class="laatikko" ><img class="kuvatyyli" src="${json[i].file}"><h4><b>${json[i].description}</b></h4><div class="like"><button class="tykkays">Like</button><p>20</p></div></li>`;
    }
  });
};

haeKuvat();

const haeUsername = () => {
  console.log('haenimi kutsuttu');

  fetch('./user').then((response) => {
    return response.json();
  }).then((json) => {
    console.log('uuseri', json);
    kayttaja = json;
    console.log('jeeees');
    nimi.innerHTML = json.username;
    pikkuprofiili.innerHTML = '<img src="' + json.picture + '">';
    // return json.username;
  });
};


haeUsername();

const haeKuvaus = () => {
  console.log('haenimi kutsuttu');

  fetch('./user').then((response) => {
    return response.json();
  }).then((json) => {
    console.log('uuseri', json);
    console.log('jeeees');
    pkuvaus.innerHTML = json.description;
  });
};

haeKuvaus();

const hae = (id) => {
  console.log('haekayttajankuvat kutsuttu');

  fetch('./images/' + id).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      haku.innerHTML += `<li><img src="${json[i].file}"></li>`;
    }
  });
};

hae(2);

const haeKayttajanKuvat = (nimi) => {
  console.log('haekayttajankuvat kutsuttu');
  console.log(nimi);

  fetch('./images/' + nimi).then((response) => {
    return response.json();
  }).then((json) => {
    fiidi.innerHTML = '';
    console.log(json);
    console.log('käyttäjän kuvat' + nimi);
    for (let i = 0; i < json.length; i++) {
      fiidi.innerHTML += `<li class="laatikko" ><img class="kuvatyyli" src="${json[i].file}"><h4><b>${json[i].description}</b></h4><button class="tykkays">Like</button></li>`;
    }
  });
};

/*
profiilinappi.addEventListener('click', function(evt) {
  evt.preventDefault();
  haeKayttajanKuvat(kayttaja.ID);
})
*/


