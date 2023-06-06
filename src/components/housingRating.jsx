const HousingRating = ({ rating }) => {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="star-container">
      {stars.split('').map((star, index) => (
        <span className="star" key={index}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default HousingRating;
