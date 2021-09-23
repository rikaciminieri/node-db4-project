const step_ingredients = [
  { step_id: 2, ingredient_id: 1, quantity: "9 oz" },
  { step_id: 3, ingredient_id: 2, quantity: "4" },
  { step_id: 8, ingredient_id: 2, quantity: "2" },
  { step_id: 9, ingredient_id: 3, quantity: "1/2 cup" },
  { step_id: 14, ingredient_id: 2, quantity: "1" },
];

exports.step_ingredients = step_ingredients;

exports.seed = function (knex) {
  return knex("step_ingredients").insert(step_ingredients);
};
