import React from 'react';

const Slider = ({ onChange, label }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <label htmlFor="pornFilter" className="mr-2 text-gray-700">
        {label}
      </label>
      <input
        type="range"
        id="pornFilter"
        min="0"
        max="1"
        defaultValue="0"
        onChange={onChange}
        className="w-24"
      />
    </div>
  );
};

export default Slider;