// components/TemperatureConverter.tsx
import { useEffect, useState } from "react";
import { convertTemperature, temperature, roundUp } from "../data/conversions";

export default function TemperatureConverter() {
  const keys = Object.keys(temperature);

  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<string>(keys[0]);
  const [to, setTo] = useState<string>(keys[1]);

  useEffect(() => {
    const newKeys = Object.keys(temperature);
    setFrom(newKeys[0]);
    setTo(newKeys[1]);
    setValue(0);
  }, []);

  const result = convertTemperature(value, from, to);
  const roundedResult = roundUp(result);

  return (
    <div className="converter-form">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {temperature[key].label}
          </option>
        ))}
      </select>

      <span className="converter-arrow" aria-hidden="true">→</span>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {temperature[key].label}
          </option>
        ))}
      </select>

      <p className="converter-result">{roundedResult}</p>
    </div>
  );
}