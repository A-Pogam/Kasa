import logo from '../assets/logoHead.svg'
import { Link, useLocation } from 'react-router-dom'; // Importation de la fonction Link et de useLocation depuis le module 'react-router-dom'

const Header = () => {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'objet location qui contient des informations sur l'URL courante

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo de Kaza" />  {/* Affichage de l'image du logo avec un texte alternatif */}
      </div>
      <nav className="nav-bar">
        <ul className="nav-text">
          <li>
            <Link
              className={`home-nav nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              to="/" // Classe 'home-nav', 'nav-link' et 'active' si l'URL courante correspond à '/'
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={`about-nav nav-link ${location.pathname === '/about' ? 'active' : ''}`} // Classe 'about-nav', 'nav-link' et 'active' si l'URL courante correspond à '/about'
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

export default Header; // Exportation du composant Header par défaut
