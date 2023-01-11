import { treiler, trend } from './fetch.js'
// const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=`;
// const TREILERS = `${BASE_URL}/movie/899112/videos?api_key=`;
const list = document.querySelector('.list-films')

// function trend() {
//     return fetch(`${TREND_URL}${API_KEY}`) .then(response => {
//         return response.json();
//       })
//   }
treiler().then(data => {
    console.log(data)
  })
// function render ()


function render (films) {
    const [{name, }] = films
    list.innerHTML = ''
    const rendering = films.map([{name}] => {
        return ` <li class="film-item">
        <img src="${}" alt="${}" width='394' height='574'>
    <h1 class="title">${}</h1>
    <p class="ganre">${}</p>
      </li>`
    })

    list.insertAdjacentHTML('beforeend', rendering)
}