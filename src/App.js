// App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';

const App = () => {
  const [savedAnimes, setSavedAnimes] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <div className="App">
      {showFavourites ? (
        <FavouritesPage
          savedAnimes={savedAnimes}
          onBackClick={() => setShowFavourites(false)}
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
        />
      ) : (
        <HomePage
          savedAnimes={savedAnimes}
          setSavedAnimes={setSavedAnimes}
          setShowFavourites={setShowFavourites}
        />
      )}
    </div>
  );
};

export default App;