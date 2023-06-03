const Housing = ({ id, title, image, host, location, tags, rating }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{host}</p>
      <p>{location}</p>
      <p>{tags}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Housing;
