// Get the modal
let modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let img = document.getElementById("sprofilepic");

/*
img.addEventListener('click', function(evt) {
  modal.style.display = "block";
  uploadmodal.style.display = "none";
});
*/





const topModal = (page) => {
  img.addEventListener('click', function(evt) {
    page.style.display = "block";
    uploadmodal.style.display = "none";
  });
};

topModal(modal);

/*
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};