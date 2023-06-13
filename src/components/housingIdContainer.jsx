import starImg from '../assets/star.png';
import starRedImg from '../assets/starRed.png';

const HousingIdcontainer = (props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starSrc = i <= props.rating ? starRedImg : starImg;
    const star = <img src={starSrc} alt="Étoile" />;
    stars.push(star);
  }
    return (
<div className="housingId-container">
        <div className="housingId-profile">
          <p className="housingId-name">{props.host.name}</p>
          <img className="housingId-profile-picture" src={props.host.picture} alt={props.host.name} />
        </div>
        <div className="rating">{stars}</div>
      </div>
    )
}

export default HousingIdcontainer;
