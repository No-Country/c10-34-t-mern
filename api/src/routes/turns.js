import { Router } from "express";
import {
    registerTurn,
    getTurns,
    getTurn,
    updateTurn,
    deleteTurn,
} from "../controllers/turns.controller.js";
import checkAuth from "../middleware/checkAuth.js";
import checkRol from "../middleware/checkRol.js";
const router = Router();

router.post("/", checkAuth, checkRol(["admin", "user"]), registerTurn);
router.get("/", checkAuth, checkRol(["admin"]), getTurns);
router.get("/:id", checkAuth, checkRol(["admin"]), getTurn);
router.patch("/:id", checkAuth, checkRol(["admin"]), updateTurn);
router.delete("/:id", checkAuth, checkRol(["admin"]), deleteTurn);

export default { router };