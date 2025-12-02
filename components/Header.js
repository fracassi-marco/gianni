'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <nav>
        <div className="container">
          <h1 className="logo">Gianni Albertario</h1>
          
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <Link href="/" onClick={closeMenu}>Chi Sono</Link>
            </li>
            <li>
              <Link href="/disegni" onClick={closeMenu}>Disegni</Link>
            </li>
            <li>
              <Link href="/testi" onClick={closeMenu}>Testi</Link>
            </li>
            <li>
              <Link href="/canzoni" onClick={closeMenu}>Canzoni</Link>
            </li>
            <li>
              <Link href="/contatti" onClick={closeMenu}>Contatti</Link>
            </li>
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
        ></div>
      )}
    </header>
  )
}
