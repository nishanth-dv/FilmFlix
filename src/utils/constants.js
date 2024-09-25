export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGMwMjFmOTEyZWQyYjNlNTNiZGIyZTg2NDY5YzY2NCIsIm5iZiI6MTcyNzE1NjYwMy42Mjk2NjcsInN1YiI6IjY2ZjFiMzY4N2ZmMmJmNTdjZDI2YzQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CBFqgJ2-8FGYJZF0BnDtp1W-1nwRGJN-gENMrlnSLZg",
  },
};
export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";

export const VIDEOS_URL =
  "https://api.themoviedb.org/3/movie/movie_id/videos";
