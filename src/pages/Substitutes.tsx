// import Converter from "../components/Converter";
// import { volume, weight } from "../data/conversions";

export default function Substitutes() {
  return (
    <>
      <section className="page">
        <header className="page-header">
          <span className="pill-tag pill-tag--accent">Alternativas</span>
          <h1>Ingredientes sustitutos</h1>
          {/* <p className="slogan">Convierte con confianza. Cocina con precisión</p> */}
          <p>¿No tienes huevo, harina de trigo o leche? No te preocupes, aquí tienes alternativas para cada ingrediente.</p>
        </header>

        <div className="empty-state">
          <span className="empty-state-icon" aria-hidden="true">
            <span></span><span></span>
          </span>
          <p>Upps, aún no hay nada aquí. Esta herramienta estará disponible pronto.</p>
        </div>
      </section>

      {/* <section className="converter-card">
        <h2>Conversión rápida de unidades de cocina</h2>
        <h3>Volumen</h3>
        <Converter units={volume} />
        <h3>Peso</h3>
        <Converter units={weight} />
      </section> */}
    </>
  );
}
