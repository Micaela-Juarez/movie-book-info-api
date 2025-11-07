import { getMovieInfo } from "../services/movieService.js";

export const fetchMovie = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) return res.status(400).json({ message: "El parámetro 'title' es requerido." });

    const movie = await getMovieInfo(title);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos de la película.", error: error.message });
  }
};