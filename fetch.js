
const API = 'https://api.themoviedb.org/3'
const filter = `/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`
const API_KEY = '9f3449ca8495a13b6d35e887839f0061'
const TREND_URL = `${API}/trending/movie/week?api_key=${API_KEY}`;
const fff =  `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export function fetchCountries(name) {
    return fetch(fff).then(r => {
        if(!r.ok) {
            throw new Error(r.status)
        }
        return r.json()
    })
    
} 