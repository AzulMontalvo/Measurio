// data/tips.ts
import type { CategoryKey } from "./categories";

type Tip = {
  title: string;
  text: string;
};

export const tips: Record<CategoryKey, Tip[]> = {
  peso: [
    {
      title: "Usa una báscula digital",
      text: "Pesar los ingredientes es mucho más preciso que medirlos por volumen, sobre todo en repostería."
    },
    {
      title: "Función de tara",
      text: "Pon el recipiente vacío sobre la báscula y presiona “tara” para que solo cuente el peso del ingrediente."
    },
    {
      title: "Dato útil",
      text: "1 onza equivale a 28.35 gramos y 1 libra a 453.6 gramos."
    }
  ],
  liquidos: [
    {
      title: "Mide a la altura de los ojos",
      text: "Coloca la taza medidora sobre una superficie plana y revisa la marca al nivel de tus ojos."
    },
    {
      title: "Las tazas no son iguales en todo el mundo",
      text: "Una taza estadounidense mide unos 240 ml, mientras que la taza métrica mide 250 ml."
    },
    {
      title: "Líquidos espesos",
      text: "Para miel o jarabes, engrasa ligeramente la taza y el líquido saldrá completo."
    }
  ],
  temperatura: [
    {
      title: "Precalienta siempre",
      text: "Enciende el horno 10 a 15 minutos antes de hornear para que alcance la temperatura indicada."
    },
    {
      title: "Hornos con ventilador",
      text: "Si tu horno es de convección, baja unos 20 °C la temperatura de la receta."
    },
    {
      title: "Referencias rápidas",
      text: "180 °C ≈ 350 °F es la temperatura más común para pasteles y galletas."
    }
  ],
  moldes: [
    {
      title: "Mide por dentro",
      text: "Toma la medida del molde de borde interior a borde interior, sin contar el grosor."
    },
    {
      title: "Cambia de molde con cuidado",
      text: "Si usas un molde más pequeño, la masa quedará más alta y necesitará más tiempo de horneado."
    },
    {
      title: "Llénalo a dos tercios",
      text: "Deja espacio para que la masa crezca y no se derrame en el horno."
    }
  ],
  ingredientes: [
    {
      title: "No compactes la harina",
      text: "Llena la taza con una cuchara y nivela con un cuchillo; si la presionas, pondrás de más."
    },
    {
      title: "Azúcar morena",
      text: "A diferencia de la harina, el azúcar morena sí se compacta ligeramente dentro de la taza."
    },
    {
      title: "Cada ingrediente pesa distinto",
      text: "Una taza de harina no pesa lo mismo que una de azúcar; por eso conviene convertir por ingrediente."
    }
  ]
};
