//VARIABLES

const scroll = document.getElementById('scroll');
const box = document.getElementById('box');
const clear = document.getElementById('clearButton');
const submit = document.getElementById('submitButton');
const success = document.getElementById('success');

//Put albums in scrollbar

document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    let data = response.data.results;
    data.forEach(function(item) {
      let childDiv = `<div class=album-container>
        <img src=./images/${item.cover_art} id=${item.id} class=albums>
      </div>`
      scroll.innerHTML += childDiv;
    });
  });
});

//Add Selected Albums

scroll.addEventListener('click', (e) => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    let data = response.data.results;
    data.forEach(function(item) {
      let childDiv = `<div class=${item.id}>${item.artist}: ${item.title}</div>`
      if (box.childElementCount < data.length){
        if (parseInt(e.target.id) === item.id){
          box.innerHTML += childDiv;
        }
      }
    })
  });
});

//Clear Tracks Button

clear.addEventListener('click', (e) => {
  box.innerHTML = ''
})

//Submit a POST request on playlist page: receive a response and append the data

submit.addEventListener('click', () => {
  axios.post('https://lit-fortress-6467.herokuapp.com/post')
  .then(response => {
    success.innerHTML = response.data;
    setTimeout(function(){
      success.innerHTML = ''
    }, 3000);
  });
});
