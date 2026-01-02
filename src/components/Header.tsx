import { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                Über Mich
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Leistungen
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
