const router = require("express").Router();
const { getRecipeById } = require("./recipes-model");

router.get("/:recipe_id", (req, res, next) => {
  const { recipe_id } = req.params;

  getRecipeById(recipe_id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch(next);
});
module.exports = router;
