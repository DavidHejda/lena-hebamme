import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} | Alle Rechte vorbehalten</p>
          <nav className="footer-nav">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
