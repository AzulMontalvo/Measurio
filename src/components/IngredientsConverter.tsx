import { useState } from "react";
import { ingredients } from "../data/ingredients";
import { weight } from "../data/conversions";
import { convert } from "../data/conversions";

export default function IngredientConverter() {
  const ingredientKeys = Object.keys(ingredients);
  const weightKeys = Object.keys(weight);

  const [ingredient, setIngredient] = useState(ingredientKeys[0]);
  const [cups, setCups] = useState(1);
  const [to, setTo] = useState(weightKeys[0]);

  const grams =
    cups * ingredients[ingredient].gramsPerCup;

  const result =
    to === "g"
      ? grams
      : convert(grams, "g", to, weight);

  return (
    <div>
      <input
        type="number"
        value={cups}
        onChange={(e) => setCups(Number(e.target.value))}
      />

      <select
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      >
        {ingredientKeys.map((key) => (
          <option key={key} value={key}>
            {ingredients[key].label}
          </option>
        ))}
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {weightKeys.map((key) => (
          <option key={key} value={key}>
            {weight[key].label}
          </option>
        ))}
      </select>

      <p>
        {result.toFixed(2)} {weight[to].label}
      </p>
    </div>
  );
}
