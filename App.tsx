import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeño delay para asegurar que la transición sea suave
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      <div className={`transition-all duration-700 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        <HomePage />
      </div>
    </>
  );
};

export default App;