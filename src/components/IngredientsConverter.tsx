import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { ingredients } from "../data/ingredients";
import { weight } from "../data/conversions";
import { convert } from "../data/conversions";

const BASE_UNIT_LABEL = "Tazas";

export default function IngredientConverter() {
  const ingredientKeys = Object.keys(ingredients);
  const weightKeys = Object.keys(weight);

  const [ingredient, setIngredient] = useState(ingredientKeys[0]);
  const [value, setValue] = useState(1);
  const [weightUnit, setWeightUnit] = useState(weightKeys[0]);
  // false: tazas → peso | true: peso → tazas
  const [reversed, setReversed] = useState(false);

  const gramsPerCup = ingredients[ingredient].gramsPerCup;

  const result = reversed
    ? convert(value, weightUnit, "g", weight) / gramsPerCup
    : convert(value * gramsPerCup, "g", weightUnit, weight);

  const resultLabel = reversed ? BASE_UNIT_LABEL : weight[weightUnit].label;

  const handleSwap = () => {
    // Conserva la equivalencia: el resultado actual pasa a ser la nueva cantidad
    setValue(Number(result.toFixed(2)));
    setReversed(!reversed);
  };

  const baseUnit = (
    <span className="unit-fixed">
      {BASE_UNIT_LABEL}
      <span className="pill-tag pill-tag--accent">base</span>
    </span>
  );

  const weightSelect = (
    <select
      value={weightUnit}
      onChange={(e) => setWeightUnit(e.target.value)}
      aria-label="Unidad de peso"
    >
      {weightKeys.map((key) => (
        <option key={key} value={key}>
          {weight[key].label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="converter-form">
      <label className="converter-field">
        <span className="converter-label">Ingrediente</span>
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
      </label>

      <label className="converter-field">
        <span className="converter-label">
          Cantidad en {reversed ? weight[weightUnit].label.toLowerCase() : BASE_UNIT_LABEL.toLowerCase()}
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </label>

      {reversed ? weightSelect : baseUnit}

      <button
        type="button"
        className="converter-swap"
        onClick={handleSwap}
        aria-label="Invertir conversión"
        title="Invertir conversión"
      >
        <ArrowLeftRight size={16} />
      </button>

      {reversed ? baseUnit : weightSelect}

      <p className="converter-result">
        {result.toFixed(2)} {resultLabel}
      </p>
    </div>
  );
}
