import React from 'react';

const ReadButton = ({ onClick }) => {
  return (
    <button
      className="bg-white text-black px-6 py-2 mt-4 rounded-full"
      onClick={onClick}
    >
      Read
    </button>
  );
};

export default ReadButton;