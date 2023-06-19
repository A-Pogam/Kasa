import Banner from "../components/banner";
import aboutBannerImg from "../assets/bannerAbout.webp";
import Collapse from "../components/Collapse";
import '../styles/pages/about.scss';
import aboutContent from "../data/aboutContent.json";

const CollapseAbout = () => { // Définition du composant CollapseAbout
  return (
    <div className="home-about"> {/* Conteneur principal du composant */}
      <Banner imgSrc={aboutBannerImg} alt="Bannière Accueil" /> {/* Composant Banner avec les attributs imgSrc et alt */}
      <div className="collapse-about">
        {aboutContent.map(({ title, text }) => (  // Utilisation de la méthode map() pour itérer sur chaque élément du tableau 'aboutContent'
          <Collapse
            title={title}
            content={<p>{text}</p>}
            key={title} // Chaque élément Collapse doit avoir une clé unique, dans ce cas le titre est utilisé comme clé
          />
        ))}
      </div>
    </div>
  );
};

export default CollapseAbout;