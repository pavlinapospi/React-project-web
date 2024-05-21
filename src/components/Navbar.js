import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return <nav className="items">
        <NavLink to="/" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink"}>Domu</NavLink>
        <NavLink to="/QrGeneration" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink"}>Generování QR kódu</NavLink>
    </nav>
}

export default Navbar