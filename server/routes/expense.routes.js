import { Router } from "express";
import isLoggedIn from "../middleware/auth.middleware.js";
import { addExpense, getExpense } from "../controllers/expense.controller.js";

const router = Router();

router.route("/").post(isLoggedIn, addExpense);
router.route("/").get(isLoggedIn, getExpense);

export default router;
