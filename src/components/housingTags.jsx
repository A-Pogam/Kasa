const HousingTags = (props) => {
    return (
      <ul>
        <li className="tags">{props.tags}</li> {/* Affichage des tags du logement */}
      </ul>
    );
  };
  
  export default HousingTags; // Exportation du composant HousingTags par défaut
  