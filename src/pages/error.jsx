import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
            <h1>Oups ! La page que vous demandez n'existe pas</h1>
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