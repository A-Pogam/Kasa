import arrowUpImg from '../assets/arrowUp.svg';
import React, { useState } from 'react';

const HousingCollapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={arrowUpImg}
          alt="Arrow Up"
          className={`collapse-icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default HousingCollapse;
