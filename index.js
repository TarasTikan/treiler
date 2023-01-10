const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const ff = 'https://api.themoviedb.org/3/trending/all/day?api_key=9f3449ca8495a13b6d35e887839f0061'
function fetchCountries(name) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
      });
 fetch(ff).then(r => {
        if(!r.ok) {
            throw new Error(r.status)
        }
        return r.json()
    }).then(data => {
        console.log(data.page)
    })
    
}
// https://api.themoviedb.org/3/trending/all/day?api_key=9f3449ca8495a13b6d35e887839f0061


// https://api.themoviedb.org/3/trending/all/day?api_key=9f3449ca8495a13b6d35e887839f0061