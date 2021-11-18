import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

import './style.css'

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/reservas" className="reserva">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </header>
  )
}
