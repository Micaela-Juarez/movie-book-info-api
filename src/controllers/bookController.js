import { getBookInfo } from "../services/bookService.js";

export const fetchBook = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) return res.status(400).json({ message: "El parámetro 'title' es requerido." });

    const book = await getBookInfo(title);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos del libro.", error: error.message });
  }
};