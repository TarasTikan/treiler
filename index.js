import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './fetch';

export  function fetchTrendedFilms() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });
    return fetch(`${TREND_URL}${searchParams}`).then(r => {
       return r.json()
    }).then(data => {
        console.log(data)
    })
  }
