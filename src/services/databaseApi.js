const baseURL = 'https://api.themoviedb.org/3';

const key = 'c19c5b12e1a277621ccd20a2c2d3142a';
// ${baseURL}/trending/movie/week?api_key=${key}

const fetchTrandingMovies = (url) => {
  return fetch(url + 'api_key='+ key)
  .then(res=> res.json());
}
const fetchMovieDetails = movieId =>  {
  return fetch(`${baseURL}/movie/${movieId}?api_key=${key}`).then(res=> res.json());
};
const fetchPerson = movieId =>  {
  return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${key}`).then(res=> res.json())
  .then(res => res.cast);
};
const fetchReviews = movieId =>  {
  return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${key}`).then(res=> res.json())
  .then(res => res.results);
};

const fetchMovieWithQuery  = nextQuery =>  {
  return fetch(`${baseURL}/search/movie?api_key=${key}&language=en-US&query=${nextQuery}&page=1&include_adult=false`)
  .then(res =>  res.json())
  .then(data =>  data.results);
};


export  default { fetchMovieDetails, fetchMovieWithQuery, fetchPerson, fetchReviews, fetchTrandingMovies }