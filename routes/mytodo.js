const router = require("express").Router();
const components = require("../components/components");

// localhost:3000/mytodo
router.get("/", async (req, res) => {
  components.renderMyTodo(res);
});

module.exports = router;
