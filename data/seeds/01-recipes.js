const recipes = [
  { recipe_name: "Chocolate Cake" },
  { recipe_name: "Chocolate Souffle" },
  { recipe_name: "Soft Boiled Eggs" },
];

exports.recipes = recipes;

exports.seed = function (knex) {
  return knex("recipes").insert(recipes);
};
