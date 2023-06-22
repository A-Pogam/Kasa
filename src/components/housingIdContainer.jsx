import starImg from '../assets/star.png';
import starRedImg from '../assets/starRed.png';

const HousingIdcontainer = (props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starSrc = i <= props.rating ? starRedImg : starImg; // Détermine l'image à afficher en fonction de la note du logement
    const star = <img key={i} src={starSrc} alt="Étoile" />; // Crée un élément img pour représenter une étoile, Si i est inférieur ou égal à la note du logement, cela signifie que l'étoile doit être affichée en rouge
    stars.push(star); // Ajoute l'étoile à la liste des étoiles
  }

  return (
    <div className="housingId-container">
      <div className="housingId-profile">
        <p className="housingId-name">{props.host.name}</p> {/* Affichage du nom de l'hôte */}
        <img className="housingId-profile-picture" src={props.host.picture} alt={props.host.name} /> {/* Affichage de l'image de profil de l'hôte */}
      </div>
      <div className="rating">{stars}</div> {/* Affichage des étoiles de notation */}
    </div>
  );
};

export default HousingIdcontainer; // Exportation du composant HousingIdcontainer par défaut

