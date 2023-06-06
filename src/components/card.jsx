import { Link } from 'react-router-dom';

const Card = ({ id, title, image, text }) => {
  return (
    <div className="card">
      <Link to={`/housing/${id}`}>
        <img src={image} alt={title} />
        <div className="card-text">{text}</div>
      </Link>
    </div>
  );
};

export default Card;