// components/ProfilePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ProfilePage = ({ onBackClick, setShowFavourites, pornFilter, handleToggleChange }) => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto flex flex-col">
      <Header pornFilter={pornFilter} handleToggleChange={handleToggleChange} />
      <div className="p-4 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p className="text-gray-600">This is the profile page.</p>
      </div>
      <Footer setShowFavourites={setShowFavourites} />
    </div>
  );
};

export default ProfilePage;