const Banner = ({ imgSrc, alt, text }) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <img className="banner-container-img" src={imgSrc} alt={alt} />
        <div className="gradient-overlay"></div>
        {text && <div className="banner-container-text">{text}</div>}
      </div>
    </div>
  );
};

  
  export default Banner;