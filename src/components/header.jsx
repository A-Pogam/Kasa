import logo from '../assets/logoHead.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo de Kaza"></img>
        </div>
        <nav className="nav-bar"></nav>
        <ul>
          <li>
            <Link className="home-nav" to="/">
              Accueil
            </Link>
            </li>
            <li>
            <Link className="about-nav" to="/about">
              A Propos
            </Link>
          </li>
        </ul>
      </header>
    );
  };
  

export default Header