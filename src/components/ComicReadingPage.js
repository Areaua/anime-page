import React from 'react';

const ComicReadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Coming Soon...
      </h1>
      <p className="text-gray-600 mb-8">
        The comic will be available here soon!
      </p>
      <div className="flex space-x-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Comic 1"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Comic 2"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Comic 3"
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ComicReadingPage;