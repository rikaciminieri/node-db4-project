const steps = [
  {
    step_number: 1,
    instructions:
      "Preheat oven to 325F and grease a round cake pan and line with parchment paper",
    recipe_id: 1,
  },
  {
    step_number: 2,
    instructions:
      "Add the chocolate chips to a microwave safe bowl and melt completely, about 1 minute",
    recipe_id: 1,
  },
  {
    step_number: 3,
    instructions:
      "Separate egg yolks from whites. Whisk whites until soft peaks form",
    recipe_id: 1,
  },
  {
    step_number: 4,
    instructions:
      "Add the egg yolks, one at a time, the bowl of melted chocolate and stir to combine",
    recipe_id: 1,
  },
  {
    step_number: 5,
    instructions:
      "Gently fold 1/3 of the whipped egg whites at a time into the chocolate mixture",
    recipe_id: 1,
  },
  {
    step_number: 6,
    instructions:
      "Pour batter into the cake pan and smooth top. Bake for 30 minutes",
    recipe_id: 1,
  },
  { step_number: 1, instructions: "Preheat oven to 375F", recipe_id: 2 },
  {
    step_number: 2,
    instructions: "Separate egg yolks from whites and place in two bowls",
    recipe_id: 2,
  },
  {
    step_number: 3,
    instructions: "Mix hazelnut spread into the bowl with the egg yolks",
    recipe_id: 2,
  },
  {
    step_number: 4,
    instructions: "In the second bowl, whisk egg whites until stiff peaks form",
    recipe_id: 2,
  },
  {
    step_number: 5,
    instructions:
      "Fold 1/3 of egg whites into chocolate mixture. Add remaining egg whites to mixture and fold",
    recipe_id: 2,
  },
  {
    step_number: 6,
    instructions:
      "Pour mixture into greased ramekin. Clean rims so souffle rises evenly and bake for 15-17 minutes",
    recipe_id: 2,
  },
  {
    step_number: 1,
    instructions: "Add 1 inch of water to sauce pot, cover, and bring to boil",
    recipe_id: 3,
  },
  {
    step_number: 2,
    instructions: "Add egg once boiling and continue boiling for 6 minutes",
    recipe_id: 3,
  },
  {
    step_number: 3,
    instructions: "Remove eggs and place in ice water and peel once cool",
    recipe_id: 3,
  },
];

exports.steps = steps;

exports.seed = function (knex) {
  return knex("steps").insert(steps);
};
