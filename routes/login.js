const router = require("express").Router();
const components = require("../components/components");
router.get("/", async (req, res) => {
  components.renderLogin(res);
});

module.exports = router;
