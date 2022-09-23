const router = require("express").Router();
const Todo = require("../controllers/Todo");

// localhost:3000/mytodo
router.get("/", Todo.getTodo);

router.post("/", Todo.addTodo);
router.get("/detail", Todo.getTodoJSON);
router.get("/delete/:id", Todo.deleteTodo);

module.exports = router;
