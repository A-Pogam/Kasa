import logo from '../assets/logoFoot.svg'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="logo de Kaza"></img>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  };
  

export default Footer
