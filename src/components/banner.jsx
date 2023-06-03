const Banner = (props) => {
    return (
      <div className="banner">
        <div className="banner-container">
          <img
            className="banner-container-img"
            src={props.imgSrc}
            alt={props.alt}
          />
          {props.text && <div className="banner-container-text">{props.text}</div>}
        </div>
      </div>
    );
  };
  
  export default Banner;