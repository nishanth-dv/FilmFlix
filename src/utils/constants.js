export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
};
export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";

export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?page=2";

export const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const VIDEOS_URL = "https://api.themoviedb.org/3/movie/movie_id/videos";

export const POSTER_URL = "https://image.tmdb.org/t/p/original/";

export const MOVIE_SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
