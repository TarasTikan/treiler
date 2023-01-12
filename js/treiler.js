import { treiler } from './fetch.js'

const list = document.querySelector('.list-films')
console.log(list)
list.addEventListener('click', onClickWatch)

    function onClickWatch (event) {
        let query = event.target
        if(event.target.nodeName !== 'IMG') {
            return
        }
        console.log(query.id)

        treiler(query.id).then(data => {

            console.log(data.results)
          //  render(data.results)
          })
    }