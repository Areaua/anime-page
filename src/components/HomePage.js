// components/HomePage.js
import React, { useState, useEffect } from 'react';
import MangaSlideshow from './MangaSlideshow';
import ComicReadingPage from './ComicReadingPage';
import GenreSelector from './GenreSelector';
import Header from './Header';
import Footer from './Footer';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';

const genreEmojis = {
  'Thriller': '💀',
  'Drama': '💔',
  'Supernatural': '🔮',
  'Romance': '❤️',
  'Adventure': '🗺️',
  'Business': '💼',
};

const HomePage = ({ savedAnimes, setSavedAnimes, setShowFavourites }) => {
  const [showComicPage, setShowComicPage] = useState(false);
  const [pornFilter, setPornFilter] = useState(localStorage.getItem('pornFilter') === 'true');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    localStorage.setItem('pornFilter', pornFilter);
  }, [pornFilter]);

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
    // Добавляем больше аниме карточек
    { name: 'Anime Thriller 3', genre: 'Thriller', href: 'https://example.com/page13.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Thriller 4', genre: 'Thriller', href: 'https://example.com/page14.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 3', genre: 'Drama', href: 'https://example.com/page15.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 4', genre: 'Drama', href: 'https://example.com/page16.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 3', genre: 'Supernatural', href: 'https://example.com/page17.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 4', genre: 'Supernatural', href: 'https://example.com/page18.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 3', genre: 'Romance', href: 'https://example.com/page19.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 4', genre: 'Romance', href: 'https://example.com/page20.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 3', genre: 'Adventure', href: 'https://example.com/page21.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 4', genre: 'Adventure', href: 'https://example.com/page22.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 3', genre: 'Business', href: 'https://example.com/page23.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 4', genre: 'Business', href: 'https://example.com/page24.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
  ];

  const adultAnimes = [
    { name: 'Anime Thriller 18+', genre: 'Thriller', href: 'https://example.com/page25.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 18+', genre: 'Drama', href: 'https://example.com/page26.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 18+', genre: 'Supernatural', href: 'https://example.com/page27.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 18+', genre: 'Romance', href: 'https://example.com/page28.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 18+', genre: 'Adventure', href: 'https://example.com/page29.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 18+', genre: 'Business', href: 'https://example.com/page30.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    // Добавляем больше аниме карточек
    { name: 'Anime Thriller 18+ 2', genre: 'Thriller', href: 'https://example.com/page31.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Drama 18+ 2', genre: 'Drama', href: 'https://example.com/page32.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Supernatural 18+ 2', genre: 'Supernatural', href: 'https://example.com/page33.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Romance 18+ 2', genre: 'Romance', href: 'https://example.com/page34.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Adventure 18+ 2', genre: 'Adventure', href: 'https://example.com/page35.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
    { name: 'Anime Business 18+ 2', genre: 'Business', href: 'https://example.com/page36.html', image: 'https://storage.googleapis.com/a1aa/image/UiUwkO3dOFZXGp7f3JLCbH2G0WfaA5si1GHXNGdaZUErAmvTA.jpg' },
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
      <AnimeDetails
        selectedAnime={selectedAnime}
        genreEmojis={genreEmojis}
        onBackClick={() => setSelectedAnime(null)}
        savedAnimes={savedAnimes}
        onSaveClick={handleSaveClick}
      />
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto">
      <Header pornFilter={pornFilter} handleToggleChange={handleToggleChange} />
      <MangaSlideshow mangas={mangas} onReadClick={handleReadClick} />
      <GenreSelector genreEmojis={genreEmojis} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />
      <div className="p-4 overflow-y-auto" style={{ height: 'calc(100vh - 260px)' }}>
        <AnimeList animes={allAnimes} handleAnimeClick={handleAnimeClick} genreEmojis={genreEmojis} savedAnimes={savedAnimes} onSaveClick={handleSaveClick} />
      </div>
      <Footer setShowFavourites={setShowFavourites} />
    </div>
  );
};

export default HomePage;