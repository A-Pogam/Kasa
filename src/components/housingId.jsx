const HousingId = (props) => {
    return (
            <div className="id">
              <div className="id-container">
                <h1 className="housingId-title">{props.title}</h1>
                <p className="housingId-location">{props.location}</p>
              </div>
              <div className="housingId-profile">
                <p className="housingId-name">{props.name}</p>
                <img className="housingId-profile-picture" src={props.imgSrc} alt="" />
              </div>
            </div>
    );
  };
  
  export default HousingId;