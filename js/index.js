import { anons } from './fetch.js'
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const listFilm = document.querySelector('.swiper-wrapper')
const itemFilm = document.querySelector('.swiper-slide')
const nextBtn = document.querySelector('.swiper-button-next')
const prevBtn = document.querySelector('.swiper-button-prev')


// nextBtn.addEventListener('click', nextPage)
// let page = 1
// function nextPage (e) {
//     anons(page).then(data => {
//         page += 1
//         listFilm.innerHTML = ''
//         renderAnonce(data.results)
//         console.log(data)
//         const swiper = new Swiper('.swiper', {
//             slidesPerView: 7,
//             // spaceBetween: 30,
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             // spaceBetween: 100,
//             // If we need pagination
//             pagination: {
//               el: '.swiper-pagination',
//             },
//             // Navigation arrows
//             navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
//           });
//     })
// }





// prevBtn.addEventListener('click', prevPage)

// function prevPage (e) {
//     anons(page).then(data => {
//         page -= 1
//         // listFilm.innerHTML = ''
//         renderAnonce(data.results)
//         console.log(data)
//         const swiper = new Swiper('.swiper', {
//             slidesPerView: 7,
//             // spaceBetween: 30,
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             // spaceBetween: 100,
//             // If we need pagination
//             pagination: {
//               el: '.swiper-pagination',
//             },
//             // Navigation arrows
//             navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
//           });
//     })
// }





anons().then(data => {
    renderAnonce(data.results)
    // nextBtn.addEventListener('click', nextPage)
    const swiper = new Swiper('.swiper', {
        slidesPerView: 7,
        // spaceBetween: 30,
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // spaceBetween: 100,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
})


function renderAnonce (data){
    const filmItem = data.map(({poster_path})=>{ 
        return `<li class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Poster Film"></li>`
    }).join('')

    listFilm.insertAdjacentHTML('beforeend', filmItem)
}


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
//     // spaceBetween: 100,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });