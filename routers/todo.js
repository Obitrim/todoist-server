const router = require("express").Router();
/**
 *
 * Route Controllers
 *
 */
const deleteTodoController = require("../controllers/deleteTodoController");
const createTodoController = require("../controllers/createTodoController");
const clearTodosController = require("../controllers/clearTodosController");
const getAllTodosController = require("../controllers/getAllTodosController");
const completeTodoController = require("../controllers/completeTodoController");
/**
 *
 * Route to get all todo items
 */
router.get("/", getAllTodosController);
/**
 *
 * Route to clear all completed todos
 */
router.delete("/clear", clearTodosController);
/**
 *
 * Route to create a new todo
 */
router.post("/create", createTodoController);
/**
 *
 * Route to complete a todo activity
 */
router.put("/complete-todo/:id", completeTodoController);
/**
 *
 * Route to delete a todo
 */
router.delete("/remove/:id", deleteTodoController);

module.exports = router;