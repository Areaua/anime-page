// components/ProfilePage.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ProfilePage = ({ onBackClick, setShowFavourites, pornFilter, handleToggleChange }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [username, setUsername] = useState('TURBASE FUZUZUZA');

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleSaveUsername = (newUsername) => {
    setUsername(newUsername);
    setShowEditModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-auto flex flex-col">
      <Header pornFilter={pornFilter} handleToggleChange={handleToggleChange} />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
          <div className="flex flex-col items-center mb-4">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-24 h-24 rounded-full mb-4 cursor-pointer" 
              onClick={() => setShowAvatarModal(true)}
            />
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm font-bold mr-2">Free Tarif</span>
                <button onClick={() => setShowPremiumModal(true)} className="text-blue-500">
                  <span className="rounded-full bg-gray-200 p-1">?</span>
                </button>
              </div>
              <h3 className="text-2xl font-bold">{username}</h3>
              <p className="text-gray-600 text-sm">Since  10.20.2024</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <div className="flex flex-col items-center">
              <button 
                className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setShowPremiumModal(true)}
              >
                <span className="text-2xl">+</span>
              </button>
              <span className="text-gray-600 mt-2">Get Premium</span>
            </div>
            <div className="flex flex-col items-center">
              <button 
                className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handleEditProfile}
              >
                <span className="text-xl">✏️</span>
              </button>
              <span className="text-gray-600 mt-2">Edit Profile</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
          <h3 className="text-lg font-bold mb-2">Notifications</h3>
          <div className="flex items-center">
            <button onClick={() => setShowNotificationsModal(true)} className="text-gray-600">
              <i className="fas fa-bell mr-2"></i>
              No notifications
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
          <h3 className="text-lg font-bold mb-2">FAQ</h3>
          <div className="flex items-center">
            <button onClick={() => setShowFAQModal(true)} className="text-gray-600">
              <i className="fas fa-question-circle mr-2"></i>
              FAQ
            </button>
          </div>
        </div>
      </div>
      <Footer setShowFavourites={setShowFavourites} />

      {/* Модальное окно для премиум-подписки */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <button onClick={() => setShowPremiumModal(false)} className="absolute top-2 right-2 text-gray-500">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg font-bold mb-2">Premium Subscription</h3>
            <p className="text-gray-600">You can upgrade to a premium subscription to get access to exclusive content and features.</p>
            <div className="mt-4">
              <h4 className="text-md font-bold mb-2">Pricing:</h4>
              <ul className="list-disc list-inside">
                <li>1 Month - $9.99</li>
                <li>3 Months - $24.99</li>
                <li>6 Months - $44.99</li>
                <li>1 Year - $79.99</li>
              </ul>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">
              Upgrade Now
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно для аватарки */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <button onClick={() => setShowAvatarModal(false)} className="absolute top-2 right-2 text-gray-500">
              <i className="fas fa-times"></i>
            </button>
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-48 h-48 rounded-full mx-auto mb-4" 
            />
            <p className="text-center text-gray-600">Click anywhere outside to close.</p>
          </div>
        </div>
      )}

      {/* Модальное окно для редактирования профиля */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <button onClick={() => setShowEditModal(false)} className="absolute top-2 right-2 text-gray-500">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg font-bold mb-2">Edit Profile</h3>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input 
                type="text" 
                id="username" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={() => handleSaveUsername(username)}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно для уведомлений */}
      {showNotificationsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <button onClick={() => setShowNotificationsModal(false)} className="absolute top-2 right-2 text-gray-500">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg font-bold mb-2">Notifications</h3>
            <p className="text-gray-600">No notifications available.</p>
          </div>
        </div>
      )}

      {/* Модальное окно для FAQ */}
      {showFAQModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <button onClick={() => setShowFAQModal(false)} className="absolute top-2 right-2 text-gray-500">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-lg font-bold mb-2">FAQ</h3>
            <p className="text-gray-600">FAQ is under development.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;