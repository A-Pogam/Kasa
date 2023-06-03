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
      {data.map((housing) => (
        <div key={housing.id}>
          <img src={housing.image} alt={housing.title} />
          <p className="legend">{housing.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default HousingCarousel;
