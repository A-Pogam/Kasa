import { Link } from 'react-router-dom';

const Card = ({ id, title, image, text }) => {
  return (
    <div className="card">
      <Link to={`/housing/${id}`} className="card-link">
        <div className="image-container">
        <div className="gradient-overlay"></div>
          <img src={image} alt={title} className="small-image" />
          <div className="card-text">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
