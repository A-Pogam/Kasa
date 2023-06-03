
const Card = ({ id, title, image, text }) => {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
