const choose = document.getElementById('chooseButton');
const clear = document.getElementById('chooseButton');
const submit = document.getElementById('chooseButton');
const scroll = document.getElementById('scroll');
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

//Submit a GET request on playlist page: receive data and append to scroll list

document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    let data = response.data.results;
    console.log(data)

    data.forEach(function (item){
      scroll.appendChild(data.item)
    });

  });

});

//Submit a POST request on playlist page: receive a response and append the data
