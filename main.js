const choose = document.getElementById('chooseButton');
const clear = document.getElementById('clearButton');
const submit = document.getElementById('submitButton');
const scroll = document.getElementById('scroll');
const box = document.getElementById('box');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

// let data;

// document.addEventListener('DOMContentLoaded', () => {
//   axios.get('https://lit-fortress-6467.herokuapp.com/object')
//   .then(response => {
//     let data = response.data.results;
//
//     for (let i = 1; i <= 3; i++){
//       if (i === 1){
//         img1.setAttribute("src", `./images/${data[Math.floor(Math.random() * data.length)].cover_art}`)
//       } else if (i === 2){
//         img2.setAttribute("src", `./images/${data[Math.floor(Math.random() * data.length)].cover_art}`)
//       } else if (i === 3){
//         img3.setAttribute("src", `./images/${data[Math.floor(Math.random() * data.length)].cover_art}`)
//       }
//     }
//   });
// });

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

scroll.addEventListener('click', (e) => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    let data = response.data.results;
    data.forEach(function(item) {
      let childDiv = `<div>${item.artist}: ${item.title}</div>`

      if (box.childElementCount <= 10){
        if (parseInt(e.target.id) === item.id){
          box.innerHTML += childDiv;
        }
      }
      console.log(box.childElementCount)
    })

  });
});

//Clear Tracks Button

clear.addEventListener('click', (e) => {
  box.innerHTML = ''
})

//Submit a POST request on playlist page: receive a response and append the data
