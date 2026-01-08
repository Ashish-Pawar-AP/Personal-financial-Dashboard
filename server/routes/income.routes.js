import { Router } from "express";
import { getincome, addIncome } from "../controllers/income.controller.js";
import isLoggedIn from "../middleware/auth.middleware.js";

const router = Router();

router.route("/").post(isLoggedIn, addIncome);
router.route("/").get(isLoggedIn, getincome);

export default router;
