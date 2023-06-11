import logo from '../assets/logoHead.svg'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo de Kaza" />
      </div>
      <nav className="nav-bar">
        <ul className="nav-text">
          <li>
            <Link
              className={`home-nav nav-link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={`about-nav nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              to="/about"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
