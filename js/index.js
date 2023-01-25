const listFilm = document.querySelector('.swiper-wrapper')
listFilm.addEventListener('click', openModal)

fetchUncomingFilms(1).then(res => {
  renderAnonce(res.data.results)
  const swiper = new Swiper('.card_slider', {
      modules: [Navigation],
      slidesPerView: 8,
      speed: 700,
      spaceBetween: 30,
      breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 40
          },
          1300: {
            slidesPerView: 8,
            spaceBetween: 40
          }},   
      // Optional parameters
      // direction: 'vertical',
      hoverpause: true,
bound: true,
      loop: true,
autoplay: {
  delay: 1000,
  disableOnInteraction: false,       
},
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
  const filmItem = data.map(({poster_path, id})=>{ 
      return `<li class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Poster Film" class="img-slider photo__card" id="${id}"></li>`
  }).join('')

  listFilm.insertAdjacentHTML('beforeend', filmItem)
}