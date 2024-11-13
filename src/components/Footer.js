// components/Footer.js
import React from 'react';

const Footer = ({ setShowFavourites }) => {
  return (
    <div className="bg-white fixed bottom-0 w-full flex justify-around items-center py-2 border-t border-gray-200" style={{ height: '60px' }}>
      <div 
        className="flex flex-col items-center text-orange-500 footer-button-animation" 
        onClick={() => setShowFavourites(false)}
      >
        <i className="fas fa-home text-2xl"></i>
        <span className="text-xs">Home</span>
      </div>
      <div 
        className="flex flex-col items-center text-gray-400 footer-button-animation" 
        onClick={() => setShowFavourites(true)}
      >
        <i className="fas fa-heart text-2xl"></i>
        <span className="text-xs">Favourites</span>
      </div>
      <div 
        className="flex flex-col items-center text-gray-400 footer-button-animation" 
        onClick={() => console.log('Profile clicked')}
      >
        <i className="fas fa-user text-2xl"></i>
        <span className="text-xs">Profile</span>
      </div>
    </div>
  );
};

export default Footer;