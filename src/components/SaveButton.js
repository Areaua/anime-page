import React, { useState } from 'react';

const SaveButton = ({ isSaved, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgContent = isSaved ? (
    <svg className="w-6 h-6" version="1.0" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
        <path d="M1040 2565 c0 -1405 2 -2555 5 -2555 3 0 343 259 755 575 413 316
        755 575 760 575 5 0 347 -259 760 -575 412 -316 752 -575 755 -575 3 0 5 1150
        5 2555 l0 2555 -1520 0 -1520 0 0 -2555z m2840 99 l0 -2256 -37 29 c-21 16
        -318 244 -660 507 l-623 477 -623 -477 c-342 -263 -639 -491 -659 -507 l-38
        -29 0 2256 0 2256 1320 0 1320 0 0 -2256z"/>
      </g>
    </svg>
  ) : (
    <svg className="w-6 h-6" version="1.0" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="none" stroke="#000000" strokeWidth="50">
        <path d="M1050 2565 c0 -1405 3 -2555 6 -2555 3 0 342 259 755 575 l749 575
        749 -575 c413 -316 752 -575 755 -575 3 0 6 1150 6 2555 l0 2555 -1510 0
        -1510 0 0 -2555z"/>
      </g>
    </svg>
  );

  return (
    <button
      className={`save-button-animation ${isSaved ? 'text-red-500' : 'text-blue-500'} ${isHovered ? 'bg-blue-100' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {svgContent}
    </button>
  );
};

export default SaveButton;