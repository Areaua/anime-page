import React from 'react';

const GenreSelector = ({ genreEmojis, selectedGenre, handleGenreClick }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button 
        className={`bg-gray-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation ${selectedGenre === 'all' ? 'bg-gray-600' : ''}`} 
        onClick={() => handleGenreClick('all')}
      >
        All
      </button>
      {Object.keys(genreEmojis).map((genre) => (
        <button 
          key={genre}
          className={`${genre === 'Thriller' ? 'bg-yellow-400' : genre === 'Drama' ? 'bg-orange-400' : genre === 'Supernatural' ? 'bg-yellow-200 text-orange-500' : genre === 'Romance' ? 'bg-pink-400' : genre === 'Adventure' ? 'bg-green-400' : 'bg-blue-400'} text-white px-4 py-2 rounded-full flex items-center genre-filter-animation ${selectedGenre === genre ? 'bg-opacity-75' : ''}`} 
          onClick={() => handleGenreClick(genre)}
        >
          <span>{genreEmojis[genre]}</span>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelector;