import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="navbar">
          <div className="logo">
            <a href="/" className="logo-link">Marcus Miller</a>
          </div>
          <nav className="nav-menu">
            <ul className="menu">
              <li className="menu-item">
                <a href="/" className="menu-link">HOME</a>
              </li>
              <li className="menu-item">
                <a href="/tour" className="menu-link active">TOUR</a>
              </li>
              <li className="menu-item">
                <a href="/about" className="menu-link">ABOUT</a>
              </li>
              <li className="menu-item">
                <a href="/gear" className="menu-link">MARCUS' GEAR</a>
              </li>
              <li className="menu-item">
                <a href="/cruises" className="menu-link">JAZZ CRUISES</a>
              </li>
              <li className="menu-item">
                <a href="/contact" className="menu-link">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
