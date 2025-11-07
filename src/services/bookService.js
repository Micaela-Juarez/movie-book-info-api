import fetch from "node-fetch";

export const getBookInfo = async (title) => {
  const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
  const data = await response.json();

  if (!data.docs.length) throw new Error("No se encontró el libro solicitado.");

  const book = data.docs[0];

  return {
    title: book.title,
    author: book.author_name?.[0] || "Desconocido",
    first_publish_year: book.first_publish_year,
    subjects: book.subject?.slice(0, 5) || [],
  };
};