//Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="/" className="navbar-brand">
                        <span className="navbar-logo" aria-hidden="true"></span>
                        Measurio
                    </a>
                    <p>Convierte con confianza. Cocina con precisión.</p>
                </div>
                <div className="footer-nav">
                    <h2>Conversores</h2>
                    <ul>
                        <li><Link to="/conversor/peso">Peso</Link></li>
                        <li><Link to="/conversor/liquidos">Líquidos</Link></li>
                        <li><Link to="/conversor/temperatura">Temperatura</Link></li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h2>Más</h2>
                    <ul>
                        <li><Link to="/conversor/moldes">Moldes</Link></li>
                        <li><Link to="/conversor/ingredientes">Ingredientes</Link></li>
                        <li><Link to="/sustitutos">Sustitutos</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span className="diamond" aria-hidden="true"></span>
                <span className="section-line" aria-hidden="true"></span>
                <small>© {new Date().getFullYear()} Measurio</small>
            </div>
        </footer>
    );
}
