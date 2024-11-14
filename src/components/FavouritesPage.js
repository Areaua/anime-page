// components/FavouritesPage.js
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import AnimeCard from './AnimeCard';
import GenreSelector from './GenreSelector';
import MangaSlideshow from './MangaSlideshow'; // Импорт компонента слайдера
import ComicReadingPage from './ComicReadingPage'; // Импорт компонента для чтения манги
import AnimeDetails from './AnimeDetails'; // Импорт компонента AnimeDetails

const FavouritesPage = ({ savedAnimes, onBackClick, genreEmojis, onSaveClick }) => {
  const [pornFilter, setPornFilter] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedManga, setSelectedManga] = useState(null); // Состояние для выбранной манги
  const [selectedAnime, setSelectedAnime] = useState(null); // Состояние для выбранного аниме

  const handleToggleChange = (checked) => {
    setPornFilter(checked);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleMangaClick = (manga) => {
    setSelectedManga(manga);
  };

  const handleBackFromManga = () => {
    setSelectedManga(null);
  };

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  const handleBackFromAnime = () => {
    setSelectedAnime(null);
  };

  const filteredAnimes = selectedGenre === 'all' ? savedAnimes : savedAnimes.filter(anime => anime.genre === selectedGenre);
  const allAnimes = pornFilter ? filteredAnimes : filteredAnimes.filter(anime => !anime.name.includes('18+'));

  // Данные для слайдера
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

  if (selectedManga) {
    return <ComicReadingPage onBackClick={handleBackFromManga} />;
  }

  if (selectedAnime) {
    return (
      <AnimeDetails
        selectedAnime={selectedAnime}
        genreEmojis={genreEmojis}
        onBackClick={handleBackFromAnime}
        savedAnimes={savedAnimes}
        onSaveClick={onSaveClick}
      />
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto">
      <div className="bg-black text-white p-2 flex items-center justify-between">
        <span className="flex items-center">
          <i className="fas fa-fire text-red-500 mr-2"></i>
          Need hotter content?
        </span>
        <ToggleSwitch onChange={handleToggleChange} checked={pornFilter} />
      </div>
      <MangaSlideshow mangas={mangas} onReadClick={handleMangaClick} /> {/* Добавляем слайдер */}
      <GenreSelector genreEmojis={genreEmojis} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />
      <div className="p-4 overflow-y-auto" style={{ height: 'calc(100vh - 260px)' }}>
        <h2 className="text-2xl font-bold mb-4">Favourites</h2>
        {allAnimes.length === 0 ? (
          <p className="text-gray-600">No favourites yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {allAnimes.map((anime, index) => (
              <AnimeCard 
                key={index} 
                anime={anime} 
                onClick={() => handleAnimeClick(anime)} 
                genreEmojis={genreEmojis} 
                savedAnimes={savedAnimes} 
                onSaveClick={onSaveClick} 
                showSaveButton={true}
              />
            ))}
          </div>
        )}
      </div>
      <div className="bg-white fixed bottom-0 w-full flex justify-around items-center py-2 border-t border-gray-200" style={{ height: '60px' }}>
        <div 
          className="flex flex-col items-center text-gray-400 footer-button-animation" 
          onClick={onBackClick}
        >
          <i className="fas fa-home text-2xl"></i>
          <span className="text-xs">Home</span>
        </div>
        <div 
          className="flex flex-col items-center text-orange-500 footer-button-animation"
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
    </div>
  );
};

export default FavouritesPage;