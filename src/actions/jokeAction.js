import fetch from 'isomorphic-fetch'

const API_BASE_URL = 'https://joke3.p.rapidapi.com/v1/joke';
const API_KEY = 'c3c1143e7bmshff008c0cd95d032p1752b3jsn6d33464deb05';

const requestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    "x-rapidapi-host": "joke3.p.rapidapi.com",
	  "x-rapidapi-key": API_KEY,
	  "useQueryString": true
  }
};

export const fetchRandomJoke = () => {
  return dispatch => {
    fetch (API_BASE_URL, requestConfig)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type:'FETCH_JOKE_OF_THE_DAY',
          payload: data
        })
      })
  }
}

export default function fetchJokes() {
  return (dispatch) => {
    fetch(`/api/jokes`)
    .then(response => response.json())
    .then(data => {
      return dispatch(getJokesAsync(data))});
  }
}

function getJokesAsync(jokes){
  return {
    type: 'FETCH_JOKES',
    payload: jokes
  };
}


export const selectJoke = (joke) => {
  return dispatch => {
    dispatch({
      type: 'JOKE_SELECTED',
      payload: joke
    })
  }
}
