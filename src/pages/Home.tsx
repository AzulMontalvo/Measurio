import { Link } from "react-router-dom";
import Converter from "../components/Converter";
import { volume, weight } from "../data/conversions";
import { Weight, GlassWater, Thermometer, CookingPot, CakeSlice, RefreshCcwDot, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <article className="hero">
        <header className="hero-intro">
          <span className="pill-badge">
            <span className="pill-badge-diamonds" aria-hidden="true">◆◆◆◆◆</span>
            Medidas exactas
          </span>
          <h1>
            Conversor de unidades de cocina: gramos, tazas y más
            <span className="hero-mark" aria-hidden="true"><span></span><span></span></span>
          </h1>
          <p>¿Una receta en gramos y tu taza en la mano? <strong>Measurio</strong> es el ayudante perfecto para chefs caseros, panaderos apasionados y cualquier persona que ame la precisión en la cocina.</p>
          <div className="hero-actions">
            <a href="#herramientas" className="btn btn--dark">
              Ver herramientas <ArrowRight size={18} />
            </a>
            <Link to="/sustitutos" className="btn btn--outline">
              Sustitutos <span className="btn-icon"><ArrowUpRight size={14} /></span>
            </Link>
          </div>
          <ul className="hero-stats">
            <li className="stat-card">
              <span className="stat-card-top"><span className="diamond" aria-hidden="true"></span><span className="stat-card-line" aria-hidden="true"></span></span>
              <strong>6</strong>
              <span>Herramientas para convertir peso, volumen, temperatura, moldes e ingredientes.</span>
            </li>
            <li className="stat-card stat-card--tinted">
              <span className="stat-card-top"><span className="diamond" aria-hidden="true"></span><span className="stat-card-line" aria-hidden="true"></span><span className="pill-tag">cocina</span></span>
              <strong>°C ↔ °F</strong>
              <span>Ajusta la temperatura del horno sin hacer cuentas a mano.</span>
            </li>
          </ul>
        </header>
        <section className="converter-card">
          <div className="converter-card-head">
            <h2>Conversión rápida</h2>
            <span className="pill-tag pill-tag--accent">al instante</span>
          </div>
          <div className="converter-block">
            <h3>Volumen</h3>
            <Converter units={volume} />
          </div>
          <div className="converter-block">
            <h3>Peso</h3>
            <Converter units={weight} />
          </div>
        </section>
      </article>

      <article className="quick-tools-section" id="herramientas">
        <div className="section-head">
          <h2>Herramientas Rápidas</h2>
          <span className="section-line" aria-hidden="true"></span>
          <span className="pill-tag">6 conversores</span>
        </div>
        <ul className="cards-section">
          <li>
            <Link to="/conversor/peso" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><Weight /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Peso</h3>
            <p>Convierte entre gramos, onzas y libras con precisión.</p>
            </Link>
          </li>
          <li>
            <Link to="/conversor/liquidos" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><GlassWater /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Volumen</h3>
            <p>Convierte entre tazas, mililitros y litros fácilmente.</p>
            </Link>
          </li>
          <li>
            <Link to="/conversor/temperatura" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><Thermometer /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Temperatura</h3>
            <p>Convierte entre grados Celsius, Fahrenheit y Kelvin sin complicaciones.</p>
            </Link>
          </li>
          <li>
            <Link to="/conversor/moldes" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><CookingPot /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Moldes</h3>
            <p>Convierte entre centímetros, pulgadas y pies con facilidad.</p>
            </Link>
          </li>
          <li>
            <Link to="/conversor/ingredientes" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><CakeSlice /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Ingredientes</h3>
            <p>Convierte entre gramos y tazas para ingredientes comunes como harina, azúcar y mantequilla.</p>
            </Link>
          </li>
          <li>
            <Link to="/conversor/sustitutos" className="tool-card">
            <span className="tool-card-top">
              <span className="tool-card-icon"><RefreshCcwDot /></span>
              <span className="tool-card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </span>
            <h3>Sustitutos</h3>
            <p>Encuentra sustitutos para ingredientes comunes en caso de que te falte algo.</p>
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
