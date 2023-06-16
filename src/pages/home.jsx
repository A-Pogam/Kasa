import React from 'react';
import Banner from "../components/banner";
import homeBannerImg from "../assets/bannerHome.webp";
import data from '../data/logements.json';
import { Link } from 'react-router-dom';
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home">
      <Banner imgSrc={homeBannerImg} alt="Bannière Accueil" text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {data.map((logement) => (
          <div key={logement.id}>
            <Link to={`/housing/${logement.id}`} className="card">
              <div className="image-container">
                <div className="gradient-overlay"></div>
                <img src={logement.cover} alt={logement.title} className="small-image" />
                <div className="card-text">{logement.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
