import Banner from "../components/banner";
import aboutBannerImg from "../assets/bannerAbout.webp";
import Collapse from "../components/Collapse";
import '../styles/pages/about.scss';
import aboutContent from "../data/aboutContent.json";

const CollapseAbout = () => {
  return (
    <div className="home-about">
      <Banner imgSrc={aboutBannerImg} alt="Bannière Accueil" />
      <div className="collapse-about">
        {aboutContent.map(({ title, text }) => (
          <Collapse title={title} key={title}>
            <div className="collapse-content">
              <p>{text}</p>
            </div>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default CollapseAbout;
