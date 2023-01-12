import { treiler, trend } from './fetch.js'
// const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=`;
// const TREILERS = `${BASE_URL}/movie/899112/videos?api_key=`;
const list = document.querySelector('.list-films')
const treil = document.querySelector('.treilers')
const API_URL = 'https://image.tmdb.org/t/p/w500'

  trend().then(data => {
   render(data.results)
  })

function render (results) {
    list.innerHTML = ''
    const rendering = results.map(muvie => {
      const {poster_path, title, id} = muvie
        return `<li class="film-item">
        <img src="${API_URL}${poster_path}" alt="${poster_path}" width='394' height='574' class="treilers" id='${id}'>
    <h1 class="title">${title}</h1>
      </li>`
    })

    list.insertAdjacentHTML('beforeend', rendering)
}

