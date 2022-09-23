const router = require("express").Router();
const Todo = require("../controllers/Todo");

//RENDER localhost:3000/mytodo
router.get("/", Todo.getTodo);

//POST  localhost:3000/mytodo
router.post("/", Todo.addTodo);

// GET localhost:3000/mytodo
router.get("/detail", Todo.getTodoJSON);

//DELETE localhost:3000/mytodo
router.get("/done/:id", Todo.deleteTodo);

module.exports = router;
