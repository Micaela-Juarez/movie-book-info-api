import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/books", bookRoutes);

export default app;