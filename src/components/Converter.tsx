//Converter.tsx
import { useEffect, useState } from "react";
import { convert } from "../data/conversions";
import type { Units } from "../data/conversions";

type ConverterProps = {
  units: Units;
};

export default function Converter({ units }: ConverterProps) {
  const keys = Object.keys(units);

  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<string>(keys[0]);
  const [to, setTo] = useState<string>(keys[1]);

  useEffect(() => {
    const newKeys = Object.keys(units);
    setFrom(newKeys[0]);
    setTo(newKeys[1]);
    setValue(1);
  }, [units]);

  const result = convert(value, from, to, units);

  return (
    <form className="converter-form">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {units[key].label}
          </option>
        ))}
      </select>

      <span className="converter-arrow" aria-hidden="true">→</span>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {units[key].label}
          </option>
        ))}
      </select>

      <output className="converter-result">{result.toFixed(2)}</output>
    </form>
  );
}
