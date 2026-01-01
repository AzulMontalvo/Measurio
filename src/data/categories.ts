// data/categories.ts
import { volume, weight } from "./conversions";

export type CategoryKey = "peso" | "liquidos" | "temperatura" | "moldes" | "ingredientes";

type Category = {
  title: string;
  type: "units" | "moldes" | "temperature" | "ingredients";
  units?: any;
};

export const categories: Record<CategoryKey, Category> = {
  peso: {
    title: "Conversor de Peso",
    type: "units",
    units: weight
  },
  liquidos: {
    title: "Conversor de Líquidos",
    type: "units",
    units: volume
  },
  temperatura: {
    title: "Conversor de Temperatura",
    type: "temperature"
  },
  moldes: {
    title: "Conversor de Moldes",
    type: "moldes"
  },
  ingredientes: {
    title: "Conversor de Ingredientes",
    type: "ingredients"
  }
};