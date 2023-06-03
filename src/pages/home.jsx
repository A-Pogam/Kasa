import Banner from "../components/banner";
import homeBannerImg from "../assets/bannerHome.webp";
import Card from '../components/card';
import data from '../data/logements.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Banner imgSrc={homeBannerImg} alt="Bannière Accueil" text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {data.map((logement) => (
          <Link to={`/pages/housing/${logement.id}`} key={logement.id}>
          <Card
            key={logement.id}
            title={logement.title}
            image={logement.cover}
            text={logement.title}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
