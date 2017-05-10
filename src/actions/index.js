import axios from 'axios'; // npm install --save axios  // get jason from bowers
// sth like jquery ajax method
const API_KEY = 'fdac5e7b77f6a0c4fac15c68236dbde3' // weather api key
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  // request/promise actually not contain our data

  

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
