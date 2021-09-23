const db = require("../../data/db-config");

const getRecipeById = async (recipe_id) => {
  const rows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("step_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .select(
      "r.recipe_name",
      "s.step_number",
      "s.instructions",
      "i.ingredient_name",
      "si.quantity"
    )
    .where("r.recipe_id", recipe_id);

  result = {
    recipe_name: rows[0].recipe_name,
    steps: rows.map((row) => ({
      step_number: row.step_number,
      instructions: row.instructions,
      ...(row.ingredient_name && {
        ingredients: {
          ingredient_name: row.ingredient_name,
          quantity: row.quantity,
        },
      }),
    })),
  };

  return result;
};

module.exports = { getRecipeById };
