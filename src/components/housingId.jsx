const HousingId = (props) => {
  return (
    <div className="id">
      <div className="id-container">
        <h1 className="housingId-title">{props.title}</h1> {/* Affichage du titre du logement */}
        <p className="housingId-location">{props.location}</p> {/* Affichage de l'emplacement du logement */}
        <ul className="tags-list">
          {props.tags.map((tag) => (
            <li className="tags-info" key={tag}>{tag}</li> /* Affichage de chaque tag dans une liste */
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HousingId; // Exportation du composant HousingId par défaut
