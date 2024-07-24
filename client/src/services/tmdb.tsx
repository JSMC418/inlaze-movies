import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdb.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzJhMjU2ZmFhMjAwNmUxOTU0MWU1NzZiMzE3OTFiZCIsIm5iZiI6MTcyMTc4NDg3Ni43NjMxNTgsInN1YiI6IjY2YTA1OTEzM2U2ODQxNDk2NTcwNGNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CvpdymdXvF1YpKprcAeyOgZZ7VJlZrOGGLN_FsYHW3E";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default tmdb;
