//Category.tsx
import { useParams } from "react-router-dom";
import Converter from "../components/Converter";
import SizeConverter from "../components/SizeConverter";
import TemperatureConverter from "../components/TemperatureConverter";
import IngredientConverter from "../components/IngredientsConverter";
import { categories } from "../data/categories";
import type { CategoryKey } from "../data/categories";
import { tips } from "../data/tips";

export default function Category() {
  const { category } = useParams();

  if (!category || !(category in categories)) {
    return (
      <section className="page">
        <header className="page-header">
          <span className="pill-tag">404</span>
          <h1>Categoría no encontrada</h1>
        </header>
      </section>
    );
  }

  const key = category as CategoryKey;
  const current = categories[key];

  return (
    <section className="page">
      <header className="page-header">
        <span className="pill-tag pill-tag--accent">Conversor</span>
        <h1>{current.title}</h1>
      </header>

      <div className="converter-panel">
        {current.type === "units" && (
          <Converter key={key} units={current.units} />
        )}

        {current.type === "temperature" && <TemperatureConverter />}

        {current.type === "moldes" && <SizeConverter />}

        {current.type === "ingredients" && <IngredientConverter />}
      </div>

      <aside className="tips-card">
        <div className="tips-card-head">
          <span className="diamond" aria-hidden="true"></span>
          <h2>Tips útiles</h2>
          <span className="section-line" aria-hidden="true"></span>
        </div>
        <ul className="tips-list">
          {tips[key].map((tip) => (
            <li key={tip.title} className="tip-item">
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
