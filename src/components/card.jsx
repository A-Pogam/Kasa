import { Link } from 'react-router-dom';

const Card = ({ id, title, image, text }) => {
  return (
    <div className="card">
      <Link to={`/housing/${id}`}>
        <img src={image} alt={title} className="small-image" />
        <div className="card-text">{title}</div>
      </Link>
    </div>
  );
};

export default Card;