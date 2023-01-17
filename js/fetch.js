const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const ANONS_URL = `${BASE_URL}/movie/upcoming?api_key=`;
const watchId = `&language=en-US&page=1` 

export function anons(page) {
    return fetch(`${ANONS_URL}${API_KEY}&language=en-US&page=${page}`).then(r => {
        if(!r.ok) {
            throw new Error(r.status)
        }
        return r.json();
      })
  }

//  export function trend() {
//     return fetch(`${TREND_URL}${API_KEY}`) .then(r => {
//         if(!r.ok) {
//             throw new Error(r.status)
//         }
//         return r.json();
//       })
//     }
    // https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
  