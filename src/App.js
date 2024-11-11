import React, { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import MangaSlideshow from './components/MangaSlideshow';
import ComicReadingPage from './components/ComicReadingPage'; // Добавлен импорт
import AnimeCard from './components/AnimeCard';

const genreEmojis = {
  'Thriller': '💀',
  'Drama': '💔',
  'Supernatural': '🔮',
  'Romance': '❤️',
  'Adventure': '🗺️',
  'Business': '💼',
};

const App = () => {
  const [showComicPage, setShowComicPage] = useState(false);
  const [pornFilter, setPornFilter] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [savedAnimes, setSavedAnimes] = useState([]);

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

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  const handleSaveClick = (anime) => {
    if (savedAnimes.includes(anime)) {
      setSavedAnimes(savedAnimes.filter(savedAnime => savedAnime !== anime));
    } else {
      setSavedAnimes([...savedAnimes, anime]);
    }
  };

  const animes = [
    { name: 'Anime Thriller 1', genre: 'Thriller', href: 'https://example.com/page1.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Thriller 2', genre: 'Thriller', href: 'https://example.com/page2.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 1', genre: 'Drama', href: 'https://example.com/page3.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 2', genre: 'Drama', href: 'https://example.com/page4.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 1', genre: 'Supernatural', href: 'https://example.com/page5.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 2', genre: 'Supernatural', href: 'https://example.com/page6.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 1', genre: 'Romance', href: 'https://example.com/page7.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 2', genre: 'Romance', href: 'https://example.com/page8.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 1', genre: 'Adventure', href: 'https://example.com/page9.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 2', genre: 'Adventure', href: 'https://example.com/page10.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 1', genre: 'Business', href: 'https://example.com/page11.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 2', genre: 'Business', href: 'https://example.com/page12.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
  ];

  const adultAnimes = [
    { name: 'Anime Thriller 18+', genre: 'Thriller', href: 'https://example.com/page13.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 18+', genre: 'Drama', href: 'https://example.com/page14.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 18+', genre: 'Supernatural', href: 'https://example.com/page15.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 18+', genre: 'Romance', href: 'https://example.com/page16.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 18+', genre: 'Adventure', href: 'https://example.com/page17.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 18+', genre: 'Business', href: 'https://example.com/page18.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
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

  if (selectedAnime) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md">
          <div className="flex justify-between items-center p-4">
            <button className="text-blue-500 flex items-center" onClick={() => setSelectedAnime(null)}>
              <span>🔙</span> Back
            </button>
          </div>
        </div>
        <div className="p-4">
          <img src={selectedAnime.image} alt={selectedAnime.name} className="w-full h-64 object-cover rounded-lg" />
          <div className="flex items-center justify-between mt-4">
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full">
              {genreEmojis[selectedAnime.genre]} {selectedAnime.genre}
            </span>
            <button 
              className="text-blue-500 save-button-animation" 
              onClick={() => handleSaveClick(selectedAnime)}
            >
              {savedAnimes.includes(selectedAnime) ? 'Unsave' : 'Save'}
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-4">{selectedAnime.name}</h2>
          <div className="flex items-center mt-2">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="ml-2 text-gray-600">4.6/5</span>
          </div>
          <p className="text-gray-600 mt-4">
            Disappearances in the city, old mystical skin scripture and one young boy with nightmares how it's all connected? These days were so complicated for Fang Zheng but he can't even imagine what challenge future prepared for him. Now only ancient runes can help him.
          </p>
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-lg font-bold">3 Episodes</h3>
            <button className="text-blue-500">Sort by Latest</button>
          </div>
          <div className="mt-4">
            {['Prologue', 'Episode 1', 'Episode 2'].map((episode, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-2">
                <div className="flex items-center">
                  <img src="https://placehold.co/100x100" alt="Episode thumbnail" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold">{episode}</h4>
                    <p className="text-xs text-gray-500">May 20, 2024</p>
                  </div>
                </div>
                <i className="fas fa-chevron-right text-gray-500"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-black text-white p-2 flex items-center justify-between">
        <span className="flex items-center">
          <i className="fas fa-fire text-red-500 mr-2"></i>
          Need hotter content?
        </span>
        <ToggleSwitch onChange={handleToggleChange} checked={pornFilter} />
      </div>
      <MangaSlideshow mangas={mangas} onReadClick={handleReadClick} />
      <div className="flex justify-center space-x-2 mt-4">
        <button 
          className="bg-gray-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation" 
          onClick={() => handleGenreClick('all')}
        >
          All
        </button>
        <button 
          className="bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation genre-thriller" 
          onClick={() => handleGenreClick('Thriller')}
        >
          <span>💀</span>
          Thriller
        </button>
        <button 
          className="bg-orange-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation genre-drama" 
          onClick={() => handleGenreClick('Drama')}
        >
          <span>💔</span>
          Drama
        </button>
        <button 
          className="bg-yellow-200 text-orange-500 px-4 py-2 rounded-full flex items-center genre-filter-animation genre-supernatural" 
          onClick={() => handleGenreClick('Supernatural')}
        >
          <span>🔮</span>
          Supernatural
        </button>
        <button 
          className="bg-pink-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation genre-romance" 
          onClick={() => handleGenreClick('Romance')}
        >
          <span>❤️</span>
          Romance
        </button>
        <button 
          className="bg-green-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation genre-adventure" 
          onClick={() => handleGenreClick('Adventure')}
        >
          <span>🗺️</span>
          Adventure
        </button>
        <button 
          className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center genre-filter-animation genre-business" 
          onClick={() => handleGenreClick('Business')}
        >
          <span>💼</span>
          Business
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {allAnimes.map((anime, index) => (
          <AnimeCard key={index} anime={anime} onClick={() => handleAnimeClick(anime)} genreEmojis={genreEmojis} savedAnimes={savedAnimes} onSaveClick={handleSaveClick} />
        ))}
      </div>
      <div className="bg-white fixed bottom-0 w-full flex justify-around items-center py-2 border-t border-gray-200">
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