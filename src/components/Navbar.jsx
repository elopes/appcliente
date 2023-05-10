import { Link } from "react-router-dom"
import "./Navbar.css";
const Navbar = () => {
  return (
   <nav className="navbar">
   <ul>
    <li>
    <Link to={'/'} className="new-btn">Home</Link>
    </li>
   <li>
    <Link to={'/board'} className="new-btn">Board</Link>
    </li>
    <li>
    <Link to={'/transfere'} className="new-btn">Operações</Link>
    </li>
    <li>
    <Link to={'/lojista'} className="new-btn">Lojista</Link>
    </li>
    <li>
    <Link to={'/user'} className="new-btn">Cliente</Link>
    </li>
   </ul>
   </nav>
  )
}

export default Navbar