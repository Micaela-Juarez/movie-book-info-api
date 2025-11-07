import express from "express";
import { fetchMovie } from "../controllers/movieController.js";
import { cacheMiddleware } from "../middlewares/cacheMiddleware.js";

const router = express.Router();

router.get("/", cacheMiddleware(30), fetchMovie); // 30 segundos de caché

export default router;