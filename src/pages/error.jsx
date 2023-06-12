import { Link } from 'react-router-dom';
import '../styles/pages/error.scss';

const Error = () => {
  return (
    <div className='error'>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas</p>
      <ul>
            <li>
              <Link className="back-home" to="/">
                Retourner sur la page d'acceuil
              </Link>
            </li>
      </ul>
    </div>
  );
};

export default Error;