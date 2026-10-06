//Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className={`navbar ${open ? "navbar--open" : ""}`}>
            <a href="/" className="navbar-brand">
                <span className="navbar-logo" aria-hidden="true"></span>
                Measurio
            </a>
            <span className="navbar-line" aria-hidden="true"></span>
            <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú">
                ☰
            </button>
            <ul>
                <li><Link to="/conversor/peso" className="menu-opciones">Peso</Link></li>
                <li><Link to="/conversor/liquidos" className="menu-opciones">Líquidos</Link></li>
                <li><Link to="/conversor/temperatura" className="menu-opciones">Temperatura</Link></li>
                <li><Link to="/conversor/moldes" className="menu-opciones">Longitud</Link></li>
                <li><Link to="/conversor/ingredientes" className="menu-opciones">Ingredientes</Link></li>
                <li><Link to="/sustitutos" className="menu-opciones">Sustitutos</Link></li>
            </ul>
            {/* <div>
                    <Link to="/" className="menu-opciones">Login</Link>
                </div> */}
        </nav>

    );
}