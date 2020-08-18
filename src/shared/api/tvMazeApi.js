import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://api.tvmaze.com/search/shows?q=';

export function getTVShowNames(query){
  return fetch(baseUrl + query)
    .then(handleResponse)
    .catch(handleError);
}