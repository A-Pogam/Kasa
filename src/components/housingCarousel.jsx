import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../data/logements.json';

const HousingCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={true}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button className="arrow arrow-prev" onClick={onClickHandler} title={label}>
            &#60;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button className="arrow arrow-next" onClick={onClickHandler} title={label}>
            &#62;
          </button>
        )
      }
    >
      {data.map((logement) => (
        <div key={logement.id}>
          <img src={logement.image} alt={logement.title} />
          <p className="legend">{logement.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default HousingCarousel;
