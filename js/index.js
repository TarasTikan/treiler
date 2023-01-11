import { treiler, trend } from './fetch.js'
// const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=`;
// const TREILERS = `${BASE_URL}/movie/899112/videos?api_key=`;
// const list = document.querySelector('.list-films')

// function trend() {
//     return fetch(`${TREND_URL}${API_KEY}`) .then(response => {
//         return response.json();
//       })
//   }
treiler().then(data => {
    console.log(data)
  })
// function render ()