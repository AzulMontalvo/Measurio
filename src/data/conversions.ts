//conversions.ts
export type Unit = {
  label: string;
  factor: number;
};

export type Units = Record<string, Unit>;

export const volume: Units = {
  ml: { label: "Mililitros", factor: 1 },
  taza: { label: "Taza", factor: 240 },
  cucharada: { label: "Cucharada", factor: 15 },
  cucharadita: { label: "Cucharadita", factor: 5 }
};

export const weight: Units = {
  g: { label: "Gramos", factor: 1 },
  kg: { label: "Kilogramos", factor: 1000 },
  oz: { label: "Onzas", factor: 28.35 },
  lb: { label: "Libras", factor: 454 }
};

export function convert(
  value: number,
  from: string,
  to: string,
  units: Units
): number {
  return (value * units[from].factor) / units[to].factor;
}

// --- Moldes (tabla discreta) ---
export const moldSizes = [
  { inches: 4, cm: 10 },
  { inches: 6, cm: 15 },
  { inches: 8, cm: 20 },
  { inches: 9, cm: 23 },
  { inches: 10, cm: 25 },
  { inches: 11, cm: 28 },
  { inches: 12, cm: 30 },
  { inches: 13, cm: 33 },
  { inches: 14, cm: 40 },
  { inches: 15, cm: 45 },
];

export function convertSize(
  value: number,
  from: "in" | "cm"
): number | null {
  const found =
    from === "in"
      ? moldSizes.find(m => m.inches === value)
      : moldSizes.find(m => m.cm === value);

  if (!found) return null;
  return from === "in" ? found.cm : found.inches;
}

// --- Temperatura (fórmulas específicas) ---
export type TemperatureUnit = {
  label: string;
};

export type TemperatureUnits = Record<string, TemperatureUnit>;

export const temperature: TemperatureUnits = {
  celsius: { label: "Celsius (°C)" },
  fahrenheit: { label: "Fahrenheit (°F)" },
  kelvin: { label: "Kelvin (K)" }
};

export function convertTemperature(
  value: number,
  from: string,
  to: string
): number {
  if (from === to) return value;

  // Primero convertir a Celsius como base
  let celsius: number;
  
  if (from === "celsius") {
    celsius = value;
  } else if (from === "fahrenheit") {
    celsius = (value - 32) * 5 / 9;
  } else if (from === "kelvin") {
    celsius = value - 273.15;
  } else {
    return value;
  }

  // Luego convertir de Celsius a la unidad destino
  if (to === "celsius") {
    return celsius;
  } else if (to === "fahrenheit") {
    return (celsius * 9 / 5) + 32;
  } else if (to === "kelvin") {
    return celsius + 273.15;
  }

  return value;
}

export function roundUp(value: number): number {
  return Math.ceil(value / 5) * 5;
}