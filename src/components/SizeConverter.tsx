//SizeConverter.tsx
import { useState } from "react";
import { moldSizes, convertSize } from "../data/conversions";

export default function SizeConverter() {
  const [from, setFrom] = useState<"in" | "cm">("in");
  const [value, setValue] = useState<number>(moldSizes[0].inches);

  const result = convertSize(value, from);

  const options =
    from === "in"
      ? moldSizes.map((m) => m.inches)
      : moldSizes.map((m) => m.cm);

  return (
    <div>
      <select value={from} onChange={(e) => {
        const newFrom = e.target.value as "in" | "cm";
        setFrom(newFrom);

        // reset value al cambiar dirección
        setValue(
          newFrom === "in"
            ? moldSizes[0].inches
            : moldSizes[0].cm
        );
      }}>
        <option value="in">Pulgadas</option>
        <option value="cm">Centímetros</option>
      </select>

      <select
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <p>
        {result !== null
          ? `Equivale a ${result} ${from === "in" ? "cm" : "in"}`
          : "No hay equivalencia estándar"}
      </p>
    </div>
  );
}
