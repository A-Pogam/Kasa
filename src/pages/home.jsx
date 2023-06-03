import Banner from "../components/banner";
import homeBannerImg from "../assets/bannerHome.webp";

const Home = () => {
  return (
    <div>
      <Banner imgSrc={homeBannerImg} alt="Bannière Accueil" text="Chez vous, partout et ailleurs" />
    </div>
  );
};

export default Home;