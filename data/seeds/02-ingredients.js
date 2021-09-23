const ingredients = [
  { ingredient_name: "Semisweet chocolate chips" },
  { ingredient_name: "Egg" },
  { ingredient_name: "Hazelnut spread" },
];

exports.ingredients = ingredients;

exports.seed = function (knex) {
  return knex("ingredients").insert(ingredients);
};
