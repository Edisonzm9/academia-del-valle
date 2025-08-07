import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [courseId, setCourseId] = useState<string | null>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeño delay para asegurar que la transición sea suave
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Manejar navegación
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      
      if (path.startsWith('/curso/')) {
        const id = path.split('/')[2];
        setCourseId(id);
        setCurrentPage('course-detail');
      } else {
        setCurrentPage('home');
        setCourseId(null);
      }
    };

    // Escuchar cambios en la URL
    window.addEventListener('popstate', handleNavigation);
    handleNavigation();

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
  };

  // Interceptar clicks en enlaces
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = link.getAttribute('href');
        if (path) {
          navigateTo(path);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderContent = () => {
    if (currentPage === 'course-detail' && courseId) {
      return <CourseDetailPage courseId={courseId} />;
    } else {
      return <HomePage />;
    }
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      <div className={`transition-all duration-700 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        {renderContent()}
      </div>
    </>
  );
};

export default App;