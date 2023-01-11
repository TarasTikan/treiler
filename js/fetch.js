const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=`;
const TREILERS = `${BASE_URL}/movie/${id}/videos?api_key=`;


export function treiler(id) {
    return fetch(`${TREILERS}${API_KEY}`) .then(r => {
        if(!r.ok) {
            throw new Error(r.status)
        }
        return r.json();
      })
  }

 export function trend() {
    return fetch(`${TREND_URL}${API_KEY}`) .then(r => {
        if(!r.ok) {
            throw new Error(r.status)
        }
        return r.json();
      })
    }
//   }export function fetchCountries(name) {
//     return fetch(`${API}${name}${filter}`).then(r => {
//         if(!r.ok) {
//             Notiflix.Notify.failure('"Oops, there is no country with that name"')
//             throw new Error(r.status)
//         }
//         return r.json()
//     })
    
// }
  