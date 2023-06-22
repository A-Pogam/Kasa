const Banner = ({ imgSrc, alt, text }) => { // Définition du composant Banner avec les attributs imgSrc, alt et text
  return (
    <div className="banner">
      <div className="banner-container">
      <div className="gradient-overlay-banner"></div>  {/* Overlay de dégradé sur l'image */}
        <img className="banner-container-img" src={imgSrc} alt={alt} /> {/* Image avec l'attribut src pour l'URL de l'image et l'attribut alt pour le texte alternatif */}
        {text && <div className="banner-container-text">{text}</div>} {/* Affichage conditionnel du texte, si le texte est fourni. syntaxe qui permet un affichage conditionnel du texte dans le composant Banner. && est utilisé ici pour évaluer une condition. Dans ce cas, la condition est texte */}
      </div>
    </div>
  );
};

  
  export default Banner;