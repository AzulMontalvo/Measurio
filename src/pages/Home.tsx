import Converter from "../components/Converter";
import { volume, weight } from "../data/conversions";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Conversor de unidades de cocina: gramos, tazas y más</h1>
        {/* <p className="slogan">Convierte con confianza. Cocina con precisión</p> */}
        <p>¿Una receta en gramos y tu taza en la mano? Measurio es tu ayudante perfecto. La herramienta esencial para chefs caseros, panaderos apasionados y cualquier persona que ame la precisión en la cocina.</p>
      </section>

      <section className="converter-card">
        <h2>Conversión rápida</h2>
        <h3>Volumen</h3>
        <Converter units={volume} />
        <h3>Peso</h3>
        <Converter units={weight} />
      </section>
    </>
  );
}
