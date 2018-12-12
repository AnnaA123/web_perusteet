
const fiidi = document.querySelector('#personalfeed');
const nimi = document.querySelector('#profileName');
const profiilinappi = document.querySelector('#myprofile');
const profiilikuva = document.querySelector('#userimg');
const pikkuprofiili = document.querySelector('#sprofilepic');

const haeUsername = () => {
  console.log('haenimi kutsuttu');

  fetch('./user').then((response) => {
    return response.json();
  }).then((json) => {
    console.log('uuseri', json);
    console.log('jeeees');
    nimi.innerHTML = json.username;

    pikkuprofiili.innerHTML =

    profiilikuva.innerHTML =
    // tulosta käyttäjädata
    haeKayttajanKuvat(json.ID);
  });
};

haeUsername();

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
      fiidi.innerHTML += `<li class="laatikko" ><img class="kuvatyyli" src="${json[i].file}"><h4><b>${json[i].description}</b></h4><div class="like"><button class="tykkays">Like</button><p>20</p></div></li>`;
    }
  });
};






















/*const esimKaytt = {
  ID: 1,
  name: 'Matti',
  email: 'matti.meikalainen@email.com',
  desc: 'Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.',
  picture: 'img/Koira.jpg'
};

const alter = document.getElementById('muokkaa');
const description = document.getElementById('kuvaus');
//const altered = document.getElementById('muokattu');
const myDesc = document.getElementById('ktiedot');

document.getElementById('pnimi').innerHTML = esimKaytt.name;
description.innerHTML = esimKaytt.desc;


alter.addEventListener('click', (evt) => {
  alter.setAttribute('class','hidden');
  description.setAttribute('class','hidden');
  altered.setAttribute('class','seen');

  myDesc.innerHTML = ('<section name="uus" id="uus" class="form-container">\n' +
      '                <h3>Change description</h3>\n' +
      '                <form action="/upload" id="mediaform">\n' +
      '                    <textarea name="description" placeholder="Description"></textarea>\n' +
      '                    <br>\n' +
      '                    <button type="submit">Ok</button>\n' +
      '                </form>\n' +
      '            </section>');

  altered.addEventListener('click', (e) => {
    let newdesc = document.getElementById('uus').value;
    //esimKaytt.desc = newdesc;


    description.innerHTML = '<p>'+newdesc+'</p>';
    alter.setAttribute('class','seen');
    description.setAttribute('class','seen');
    //esimKaytt.desc = newdesc;

    myDesc.innerHTML = '<br>'+esimKaytt.desc;
    //altered.setAttribute('class','hidden');
  });


});

*/