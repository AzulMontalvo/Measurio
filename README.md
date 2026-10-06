# Measurio

**Conversor de unidades de cocina: gramos, tazas y más.**

Measurio es una aplicación web para quienes cocinan y hornean en casa. Sirve para convertir las medidas de una receta (peso, volumen, temperatura, tamaño de moldes e ingredientes) sin hacer cuentas a mano.

## Funcionalidades

| Herramienta | Ruta | Qué hace |
| --- | --- | --- |
| **Conversión rápida** | `/` | Desde el inicio, convierte al instante entre unidades de volumen y de peso. |
| **Peso** | `/conversor/peso` | Gramos, kilogramos, onzas y libras. |
| **Líquidos** | `/conversor/liquidos` | Mililitros, tazas, cucharadas y cucharaditas. |
| **Temperatura** | `/conversor/temperatura` | Celsius, Fahrenheit y Kelvin. El resultado se redondea hacia arriba al múltiplo de 5 más cercano, como en las perillas del horno. |
| **Moldes** | `/conversor/moldes` | Equivalencias estándar entre pulgadas y centímetros para moldes de 4" a 15". Si una medida no tiene equivalencia, la app lo indica. |
| **Ingredientes** | `/conversor/ingredientes` | Convierte tazas a peso según la densidad de cada ingrediente (harinas, azúcares, cacao, avena, leche, etc.). La **taza es la unidad base**; con el botón ⇄ se invierte la conversión (peso → tazas) y se conserva la equivalencia. |
| **Sustitutos** | `/sustitutos` | *Próximamente.* Alternativas para ingredientes que te falten. |

Cada conversor individual incluye una tarjeta de **tips útiles** relacionados con la medición.

## Cómo funcionan las conversiones

Toda la lógica está en [`src/data/conversions.ts`](src/data/conversions.ts):

- **Peso y volumen:** cada unidad tiene un `factor` respecto a una unidad base (gramos o mililitros). La función `convert(value, from, to, units)` calcula `value × factor_origen ÷ factor_destino`.
- **Temperatura:** `convertTemperature` pasa primero a Celsius y de ahí a la unidad de destino. `roundUp` redondea el resultado a múltiplos de 5.
- **Moldes:** `convertSize` busca la medida en la tabla discreta `moldSizes`. No interpola valores.
- **Ingredientes:** se usa `gramsPerCup` de [`src/data/ingredients.ts`](src/data/ingredients.ts):
  - tazas → peso: `tazas × gramsPerCup`, convertido después a la unidad elegida;
  - peso → tazas: se convierte a gramos y se divide entre `gramsPerCup`.

## Tecnologías

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como servidor de desarrollo y empaquetador
- [React Router](https://reactrouter.com/) para la navegación
- [Lucide](https://lucide.dev/) para los íconos
- CSS propio con variables (sin frameworks de estilos) y la tipografía [Outfit](https://fonts.google.com/specimen/Outfit) incluida localmente

## Requisitos

- Node.js 20.19 o superior (requerido por Vite 7)
- npm

## Instalación y uso

```bash
git clone https://github.com/AzulMontalvo/Measurio.git
cd Measurio
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Revisa los tipos (`tsc -b`) y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run lint` | Analiza el código con ESLint. |

## Estructura del proyecto

```
src/
├── App.tsx                  # Layout (navbar, rutas y footer)
├── main.tsx                 # Punto de entrada y BrowserRouter
├── assets/fonts/            # Tipografía Outfit
├── components/
│   ├── Navbar.tsx           # Menú de navegación (con menú desplegable en móvil)
│   ├── Footer.tsx
│   ├── Converter.tsx        # Conversor genérico por factores (peso / volumen)
│   ├── TemperatureConverter.tsx
│   ├── SizeConverter.tsx    # Moldes
│   └── IngredientsConverter.tsx
├── data/
│   ├── categories.ts        # Categorías disponibles en /conversor/:category
│   ├── conversions.ts       # Unidades y funciones de conversión
│   ├── ingredients.ts       # Gramos por taza de cada ingrediente
│   └── tips.ts              # Tips mostrados en cada conversor
├── pages/
│   ├── Home.tsx             # Inicio: conversión rápida y herramientas
│   ├── Category.tsx         # Página de cada conversor + tips
│   └── Substitutes.tsx      # Sustitutos (próximamente)
└── styles/global.css        # Estilos globales y paleta de colores
```

## Cómo extender la app

- **Agregar un ingrediente:** añade una entrada en `src/data/ingredients.ts` con su `label` y `gramsPerCup`.
- **Agregar una unidad de peso o volumen:** añádela en `weight` o `volume` dentro de `conversions.ts`, con su `factor` respecto a gramos o mililitros.
- **Agregar o editar tips:** modifica `src/data/tips.ts`. Cada categoría tiene su propia lista.
- **Agregar un conversor nuevo:**
  1. Regístralo en `categories.ts` (y en el tipo `CategoryKey`).
  2. Añade sus tips en `tips.ts`.
  3. Si necesita un componente propio, renderízalo en `pages/Category.tsx`.

## Diseño

La interfaz usa una paleta cálida (beige, arena y café) con **rosa fucsia** como color de acento. Tiene tarjetas tipo *bento* con bordes finos, botones y campos en forma de píldora, y rombos como elemento gráfico. Los colores se definen como variables en `:root` dentro de [`src/styles/global.css`](src/styles/global.css).

## Pendientes

- Página de **Sustitutos** con alternativas para ingredientes.
- La tarjeta "Sustitutos" del inicio apunta a `/conversor/sustitutos`; debe apuntar a `/sustitutos`.
