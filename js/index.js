import { treiler, trend } from './fetch.js'
// import { renderTrail} from './treiler.js'
// const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=`;
// const TREILERS = `${BASE_URL}/movie/899112/videos?api_key=`;
const list = document.querySelector('.list-films')
const treil = document.querySelector('.treilers')
const API_URL = 'https://image.tmdb.org/t/p/w500'

  trend().then(data => {
   render(data.results)
   const div = document.querySelector('.wrap')
   console.log(div)
   list.addEventListener('click', onClickWatch)

   function onClickWatch (event) {
    let query = event.target
    if(event.target.nodeName !== 'IMG') {
        return
    }
    treiler(query.id).then(data => {
const officialTrail = data.results.length -1
        console.log(data.results[officialTrail])
        renderTrail(data.results[officialTrail])
      })
}
function renderTrail (video) {
  // div.innerHTML = ''
  // const rendering = video.map(muvie => {
    const {key} = video
    div.innerHTML = `<iframe
    width="394"
    height="574"
    src="https://www.youtube.com/embed/${key}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    waitUntil()
  ></iframe>`
  // })
    //   const {key} = video
    //   div.innerHTML = `<iframe
    //   width="394"
    //   height="574"
    //   src="https://www.youtube.com/embed/${key}"
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   allowfullscreen
    //   waitUntil()
    // ></iframe>`
    // setTimeout(() => {
    //   console.clear()
    // }, 3000);
    // setTimeout(() => {
    //   console.clear()
    // }, 3000);
    // setTimeout(() => {
    //   console.clear()
    // }, 4000);
    // div.insertAdjacentHTML('beforeend', rendering)
}
  })

function render (results) {
    list.innerHTML = ''
    const rendering = results.map(muvie => {
      const {poster_path, title, id} = muvie
        return `<li class="film-item">
        <div class='wrap'>
        <img src="${API_URL}${poster_path}" alt="${poster_path}" width='394' height='574' class="treilers" id='${id}'>
        </div>
    <h1 class="title">${title}</h1>
      </li>`
    })

    list.insertAdjacentHTML('beforeend', rendering)
}

