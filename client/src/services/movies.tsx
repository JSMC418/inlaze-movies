import tmdb from "./tmdb";

const base = "movie";

const getMoviesByCategory = (category: string) => {
  const config = {
    params: { language: 'en-US', page: 1 },
    headers: { "Content-Type": "application/json" },
  };
  return tmdb.get(base + `/${category}`, config);
};

export default { getMoviesByCategory };