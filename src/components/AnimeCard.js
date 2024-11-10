// src/components/AnimeCard.js
import React from 'react';

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={anime.image} alt={anime.name} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="text-sm font-bold">{anime.name}</h3>
        <p className="text-xs text-gray-500">{anime.genre}</p>
        {anime.name.includes('18+') && (
          <span className="text-red-500 text-xs">18+</span>
        )}
        <div className="flex items-center mt-1">
          <i className="fas fa-star text-yellow-500 text-xs"></i>
          <span className="text-xs ml-1">4.6/5</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;