import { createRecipeController } from "../controllers/recipe.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create", createRecipeController);

export default router;
