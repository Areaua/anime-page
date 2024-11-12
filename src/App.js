import React, { useState, useEffect } from 'react';
import MangaSlideshow from './components/MangaSlideshow';
import ComicReadingPage from './components/ComicReadingPage';
import FavouritesPage from './components/FavouritesPage';
import GenreSelector from './components/GenreSelector';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';

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
  const [pornFilter, setPornFilter] = useState(localStorage.getItem('pornFilter') === 'true');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [savedAnimes, setSavedAnimes] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

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
      <AnimeDetails
        selectedAnime={selectedAnime}
        genreEmojis={genreEmojis}
        onBackClick={() => setSelectedAnime(null)}
        savedAnimes={savedAnimes}
        onSaveClick={handleSaveClick}
      />
    );
  }

  if (showFavourites) {
    return <FavouritesPage savedAnimes={savedAnimes} onBackClick={() => setShowFavourites(false)} genreEmojis={genreEmojis} onSaveClick={handleSaveClick} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header pornFilter={pornFilter} handleToggleChange={handleToggleChange} />
      <MangaSlideshow mangas={mangas} onReadClick={handleReadClick} />
      <GenreSelector genreEmojis={genreEmojis} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />
      <AnimeList animes={allAnimes} handleAnimeClick={handleAnimeClick} genreEmojis={genreEmojis} savedAnimes={savedAnimes} onSaveClick={handleSaveClick} />
      <Footer setShowFavourites={setShowFavourites} />
    </div>
  );
};

export default App;