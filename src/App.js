// App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';

const App = () => {
  const [savedAnimes, setSavedAnimes] = useState([]);
  const [activePage, setActivePage] = useState('home');
  const [pornFilter, setPornFilter] = useState(false);

  const handleBackClick = () => {
    setActivePage('home');
  };

  const handleToggleChange = (checked) => {
    setPornFilter(checked);
  };

  return (
    <div className="App flex flex-col min-h-screen">
      {activePage === 'home' && (
        <HomePage
          savedAnimes={savedAnimes}
          setSavedAnimes={setSavedAnimes}
          setShowFavourites={() => setActivePage('favourites')}
          pornFilter={pornFilter}
          handleToggleChange={handleToggleChange}
        />
      )}
      {activePage === 'favourites' && (
        <FavouritesPage
          savedAnimes={savedAnimes}
          onBackClick={handleBackClick}
          genreEmojis={{
            'Thriller': '💀',
            'Drama': '💔',
            'Supernatural': '🔮',
            'Romance': '❤️',
            'Adventure': '🗺️',
            'Business': '💼',
          }}
          onSaveClick={(anime) => {
            if (savedAnimes.includes(anime)) {
              setSavedAnimes(savedAnimes.filter(savedAnime => savedAnime !== anime));
            } else {
              setSavedAnimes([...savedAnimes, anime]);
            }
          }}
          pornFilter={pornFilter}
          handleToggleChange={handleToggleChange}
        />
      )}
      {activePage === 'profile' && (
        <ProfilePage
          onBackClick={handleBackClick}
          setShowFavourites={() => setActivePage('favourites')}
          pornFilter={pornFilter}
          handleToggleChange={handleToggleChange}
        />
      )}
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default App;