import Banner from "../components/banner";
import aboutBannerImg from "../assets/bannerAbout.webp";
import Collapse from "../components/Collapse";  
import '../styles/pages/about.scss';

const CollapseAbout = () => {
  return (
    <div className="home-about">
      <Banner imgSrc={aboutBannerImg} alt="Bannière Accueil" />
      <div className="collapse-about">
        <Collapse title="Fiabilité" />
        <Collapse title="Respect" />
        <Collapse title="Service" />
        <Collapse title="Sécurité" />
      </div>
    </div>
  );
};

export default CollapseAbout;
