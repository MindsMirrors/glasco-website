import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav__container">
        <Link to="/">
          <div className="logo">Glasco</div>
        </Link>
        <ul className="nav__links">
          <li className="nav__list"><Link to="/" className="nav__link">Home</Link></li>
          <li className="nav__list"><Link to="/about" className="nav__link">About</Link></li>
          <li className="nav__list"><Link className="nav__link">Services</Link></li>
          <li className="nav__list"><Link className="nav__link">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
