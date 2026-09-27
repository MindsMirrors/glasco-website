import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <div className="footer__log--img">Glasco</div>
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">Home</Link>
            <span className="footer__link no-cursor">About</span>
            <Link className="footer__link">Services</Link>
            <Link className="footer__link">Contact</Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Glasco
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
