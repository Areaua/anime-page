import React, { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import MangaSlideshow from './components/MangaSlideshow';
import ComicReadingPage from './components/ComicReadingPage';

const App = () => {
  const [showComicPage, setShowComicPage] = useState(false);
  const [pornFilter, setPornFilter] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');

  const handleToggleChange = (checked) => {
    setPornFilter(checked);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleReadClick = () => {
    setShowComicPage(true);
  };

  const handleBackClick = () => {
    setShowComicPage(false);
  };

  const animes = [
    { name: 'Anime Thriller 1', genre: 'Thriller' },
    { name: 'Anime Thriller 2', genre: 'Thriller' },
    { name: 'Anime Drama 1', genre: 'Drama' },
    { name: 'Anime Drama 2', genre: 'Drama' },
    { name: 'Anime Supernatural 1', genre: 'Supernatural' },
    { name: 'Anime Supernatural 2', genre: 'Supernatural' },
  ];

  const adultAnimes = [
    { name: 'Anime Thriller 18+', genre: 'Thriller' },
    { name: 'Anime Drama 18+', genre: 'Drama' },
    { name: 'Anime Supernatural 18+', genre: 'Supernatural' },
  ];

  const mangas = [
    {
      title: "Cinderella Chef",
      image: "https://storage.googleapis.com/a1aa/image/aBzENfwKiJzoRKKEAQkYIdYlnVDuoReOHeTosFLUxdbEXQfOB.jpg"
    },
    {
      title: "Another Manga",
      image: "https://storage.googleapis.com/a1aa/image/UdGsLfffIlcz0pfHAkLoBI5wXDPVzyzSdEOSNvA67M7NugedC.jpg"
    },
    {
      title: "Yet Another Manga",
      image: "https://storage.googleapis.com/a1aa/image/3.jpg"
    },
    {
      title: "Fourth Manga",
      image: "https://storage.googleapis.com/a1aa/image/XzBJtjW6lypKPF4VLR6QDMAyilFn9ulNcm8EXLiZtxyaey3JA.jpg"
    }
  ];

  const filteredAnimes = selectedGenre === 'all' ? animes : animes.filter(anime => anime.genre === selectedGenre);
  const filteredAdultAnimes = selectedGenre === 'all' ? adultAnimes : adultAnimes.filter(anime => anime.genre === selectedGenre);

  const allAnimes = pornFilter ? [...filteredAnimes, ...filteredAdultAnimes] : filteredAnimes;

  if (showComicPage) {
    return <ComicReadingPage onBackClick={handleBackClick} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto">
      <div className="bg-black text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-orange-500 text-lg">🔥</span>
          <span className="ml-2">Need hotter content?</span>
        </div>
        <div className="flex items-center">
          <ToggleSwitch onChange={handleToggleChange} checked={pornFilter} />
        </div>
      </div>
      <MangaSlideshow mangas={mangas} onReadClick={handleReadClick} />
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded-full flex items-center" onClick={() => handleGenreClick('all')}>
          All
        </button>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center" onClick={() => handleGenreClick('Thriller')}>
          <i className="fas fa-skull mr-2"></i>
          Thriller
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-full flex items-center" onClick={() => handleGenreClick('Drama')}>
          <i className="fas fa-heart mr-2"></i>
          Drama
        </button>
        <button className="bg-yellow-200 text-orange-500 px-4 py-2 rounded-full flex items-center" onClick={() => handleGenreClick('Supernatural')}>
          <i className="fas fa-magic mr-2"></i>
          Supernatural
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {allAnimes.map((anime, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Anime character"
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/a1aa/image/gfrrf5fQYMLJqoSeasJzmjhjyAy3F53XbAmcJV7F07BpmXedC.jpg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{anime.name}</h2>
              <p className="text-gray-500">{anime.genre}</p>
              {anime.name.includes('18+') && (
                <span className="text-red-500 text-xs">18+</span>
              )}
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-2 text-gray-700">4.6/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer bg-white fixed bottom-0 w-full flex justify-around items-center py-2 border-t border-gray-200">
        <div className="flex flex-col items-center text-orange-500">
          <i className="fas fa-home text-2xl"></i>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <i className="fas fa-heart text-2xl"></i>
          <span className="text-xs">Favourites</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <i className="fas fa-user text-2xl"></i>
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default App;