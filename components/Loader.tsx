import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Thinking...</p>
    </div>
  );
};

export default Loader;
