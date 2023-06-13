const HousingIdcontainer = (props) => {
    return (
<div className="housingId-container">
        <div className="housingId-profile">
          <p className="housingId-name">{props.host.name}</p>
          <img className="housingId-profile-picture" src={props.host.picture} alt={props.host.name} />
        </div>
      </div>
    )
}

export default HousingIdcontainer;
