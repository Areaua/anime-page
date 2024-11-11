import React, { useState, useEffect } from 'react';

const MangaSlideshow = ({ mangas, onReadClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mangas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mangas.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const manga = mangas[currentIndex];

  return (
    <div className="relative">
      <img
        src={manga.image}
        alt={manga.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl font-bold">{manga.title}</h1>
        <button 
          className="bg-white text-black px-6 py-2 mt-4 rounded-full button-animation" 
          onClick={onReadClick}
        >
          Read
        </button>
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2">
        {mangas.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MangaSlideshow;