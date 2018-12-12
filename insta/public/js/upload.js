'use strict';

let uploadmodal = document.getElementById('uploadmodal');

let uploadspan = document.getElementsByClassName("sulje")[0];

let nappi = document.getElementById('upload');

nappi.addEventListener('click', function(evt){
  uploadmodal.style.display = "block";
  modal.style.display = "none";
});

uploadspan.onclick = function() {
  uploadmodal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target === uploadmodal) {
    uploadmodal.style.display = "none";
  }
};
/*---lÃƒÂ¤hettÃƒÂ¤ÃƒÂ¤ kuvan--------------------*/


const lomake = document.querySelector("#kuvalaheta");
const kuva = document.querySelector('#kuva');

const lahetalomake = (evt) =>{
  console.log('morororororor');
  evt.preventDefault();
  const fd = new FormData(lomake);
  const asetukset = {
    method: 'post',
    body: fd,
  };

  fetch('./upload',asetukset).then((response)=>{
    return response.json();
  }).then((json)=>{
    console.log(json);
    if (json.mimeType.includes('image')){
      kuva.src = json.url;

    }

  });
};
lomake.addEventListener('submit', lahetalomake);