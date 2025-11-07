import express from "express";
import { fetchBook } from "../controllers/bookController.js";
import { cacheMiddleware } from "../middlewares/cacheMiddleware.js";

const router = express.Router();

router.get("/", cacheMiddleware(30), fetchBook);

export default router;