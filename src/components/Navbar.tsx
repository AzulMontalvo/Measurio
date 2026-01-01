//Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <nav className="navbar">
                <div className="title">
                    <a href="/" >Measurio</a>
                </div>
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