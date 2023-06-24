import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="loader-container">
        <img
          src={require('../../images/loading.gif')}
          alt="Loading..."
          className="w-28 h-28"
        />
      </div>
      <p className="mt-2 text-gray-600 text-2xl"> Loading...</p>
    </div>
  );
};

export default PageLoader;
