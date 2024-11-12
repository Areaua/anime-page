// components/Header.js
import React from 'react';
import ToggleSwitch from './ToggleSwitch';

const Header = ({ pornFilter, handleToggleChange }) => {
  return (
    <div className="bg-black text-white p-2 flex items-center justify-between">
      <span className="flex items-center">
        <i className="fas fa-fire text-red-500 mr-2"></i>
        Need hotter content?
      </span>
      <ToggleSwitch onChange={handleToggleChange} checked={pornFilter} />
    </div>
  );
};

export default Header;