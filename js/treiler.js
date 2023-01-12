import { treiler } from './fetch.js'

const list = document.querySelector('.list-films')
const div = document.querySelector('div')
list.addEventListener('click', onClickWatch)

    function onClickWatch (event) {
        let query = event.target
        if(event.target.nodeName !== 'IMG') {
            return
        }
        console.log(query.id)
        console.log(event.target)
        treiler(query.id).then(data => {
const officialTrail = data.results.length -1
            console.log(data.results[officialTrail])
            renderTrail(data.results[officialTrail])
          //  render(data.results)
          })
    }

    function renderTrail (video) {
        // console.clear()
            const {key} = video
            div.innerHTML = `<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${key}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            waitUntil()
          ></iframe>`
          setTimeout(() => {
            console.clear()
          }, 3000);
          setTimeout(() => {
            console.clear()
          }, 3000);
          setTimeout(() => {
            console.clear()
          }, 4000);
        // body.insertAdjacentHTML('beforeend', rendering)
    }

