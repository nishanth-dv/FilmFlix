export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
};
export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";

export const VIDEOS_URL = "https://api.themoviedb.org/3/movie/movie_id/videos";
