import axios from 'axios';

const API_KEY = 'bc7e5d276b91de26f7ed67f51bb9175d';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//q=London,us';

export const FETCH_WEATHER = 'FETCH_WEATHER';

//to keep action types consistent throughout our reducers

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
