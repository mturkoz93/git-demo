import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", completeTodo);

export default router;
