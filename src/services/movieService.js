import fetch from "node-fetch";

export const getMovieInfo = async (title) => {
  const apiKey = process.env.OMDB_API_KEY;
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  const data = await response.json();

  if (data.Response === "False") throw new Error(data.Error);

  // Transformación del JSON externo
  return {
    title: data.Title,
    year: data.Year,
    genre: data.Genre,
    director: data.Director,
    actors: data.Actors,
    plot: data.Plot,
    poster: data.Poster,
  };
};