import Banner from "../components/banner";
import aboutBannerImg from "../assets/bannerAbout.webp";

const About = () => {
  return (
    <div>
      <Banner imgSrc={aboutBannerImg} alt="Bannière À propos" />
    </div>
  );
};

export default About;