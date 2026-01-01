//Category.tsx
import { useParams } from "react-router-dom";
import Converter from "../components/Converter";
import SizeConverter from "../components/SizeConverter";
import TemperatureConverter from "../components/TemperatureConverter";
import IngredientConverter from "../components/IngredientsConverter";
import { categories } from "../data/categories";
import type { CategoryKey } from "../data/categories";

export default function Category() {
  const { category } = useParams();

  if (!category || !(category in categories)) {
    return <h1>Categoría no encontrada</h1>;
  }

  const key = category as CategoryKey;
  const current = categories[key];

  return (
    <main>
      <h1>{current.title}</h1>

      {current.type === "units" && (
        <Converter key={key} units={current.units} />
      )}

      {current.type === "temperature" && <TemperatureConverter />}

      {current.type === "moldes" && <SizeConverter />}

      {current.type === "ingredients" && <IngredientConverter />}
    </main>
  );
}
