const Banner = ({ imgSrc, alt, text }) => {
  return (
    <div className="banner">
      <div className="banner-container">
      <div className="gradient-overlay-banner"></div>
        <img className="banner-container-img" src={imgSrc} alt={alt} />
        {text && <div className="banner-container-text">{text}</div>}
      </div>
    </div>
  );
};

  
  export default Banner;