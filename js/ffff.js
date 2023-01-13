const btnTreil = document.querySelector('.modal-btn-trailer')
const imgss = document.querySelector('.modal-image')
const div = document.querySelector('.modal-wrap-img-btn')
console.log(div)
console.log(imgss)
console.log(btnTreil)
btnTreil.addEventListener('click', onClickWatch)

async function onClickWatch (event) {
  const li = item.target.closest('.photo__card');
  const id = li.getAttribute('id');

  const response = await fetchFilmTrailer(id).then(r => {
    return r.data;
  })
  console.log(response.results.length -1)
  const officialTrail = response.results.length -1
  renderTrail(response.results[officialTrail])
}