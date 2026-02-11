import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'TOUR', href: '/tour' },
    { name: 'ABOUT', href: '/about' },
    { name: "MARCUS' GEAR", href: '/gear' },
    { name: 'JAZZ CRUISES', href: '/cruises' },
    { name: 'CONTACT', href: '/contact' }
  ]

  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="logo-link">
              <div className="logo-main">Marcus Miller</div>
            </Link>
          </div>
          <nav className="nav-menu">
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.href} className="menu-item">
                  <Link
                    to={item.href}
                    className={`menu-link ${location.pathname === item.href ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
