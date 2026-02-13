import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'TOUR', href: '/tour' },
    { name: 'ABOUT', href: '/about' },
    { name: "MUBBA'S GEAR", href: '/gear' },
    { name: 'SHOP', href: '/shop' },
    { name: 'CONTACT', href: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="content-wrapper">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <div className="logo-main">HUMPHREY MUBBA</div>
            </Link>
          </div>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.href} className="menu-item">
                  <Link
                    to={item.href}
                    className={`menu-link ${location.pathname === item.href ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  )
}

export default Header
