import { createRecipeController, getNameRecipesController } from "../controllers/recipe.controller.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post("/create", verifyToken, createRecipeController);
router.get("/names", verifyToken, getNameRecipesController)

export default router;
