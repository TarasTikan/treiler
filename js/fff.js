const btnTreil = document.querySelector('.modal-btn-trailer')
const div = document.querySelector('.modal-wrap-img-btn')
const wrapIMG = document.querySelector('.modal-img-wrap')
btnTreil.addEventListener('click', onClickWatch)

async function onClickWatch () {
  const li = item.target.closest('.photo__card');
  const id = li.getAttribute('id');
  const response = await fetchFilmTrailer(id).then(r => {
    return r.data;
  })
  const officialTrail = response.results.length -1
  wrapIMG.remove();
  btnTreil.style.display = 'none'
  ref.modalWrap.insertAdjacentHTML('afterBegin', renderTrail(response.results[officialTrail]));
}




function renderTrail ({key}) {
    return `<iframe
    width="375"
      height="478"
      src="https://www.youtube.com/embed/${key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      waitUntil()
      class='modal-image'
    ></iframe>`
    }