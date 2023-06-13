const HousingId = (props) => {
  return (
    <div className="id">
      <div className="id-container">
        <h1 className="housingId-title">{props.title}</h1>
        <p className="housingId-location">{props.location}</p>
        <ul className="tags-list">
          {props.tags.map((tag) => (
            <li className="tags-info" key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default HousingId;
