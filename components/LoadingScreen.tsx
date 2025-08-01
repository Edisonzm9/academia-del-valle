import React, { useState, useEffect } from 'react';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  LightBulbIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: <AcademicCapIcon className="w-8 h-8" />, text: "Preparando tu experiencia educativa..." },
    { icon: <BookOpenIcon className="w-8 h-8" />, text: "Cargando recursos de aprendizaje..." },
    { icon: <LightBulbIcon className="w-8 h-8" />, text: "Activando tu potencial..." },
    { icon: <UserGroupIcon className="w-8 h-8" />, text: "Conectando con tu futuro..." },
    { icon: <CheckCircleIcon className="w-8 h-8" />, text: "¡Listo para potenciar tu futuro!" }
  ];

  useEffect(() => {
    // Simular progreso de carga
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Mostrar contenido después de un breve delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Cambiar pasos de carga
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearTimeout(contentTimer);
      clearInterval(stepTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Esperar un poco antes de iniciar la transición de salida
      const fadeOutTimer = setTimeout(() => {
        setFadeOut(true);
        // Llamar a onLoadingComplete después de la animación de fade out
        const completeTimer = setTimeout(() => {
          onLoadingComplete();
        }, 500);
        return () => clearTimeout(completeTimer);
      }, 500);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out ${
        fadeOut 
          ? 'opacity-0 pointer-events-none' 
          : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0B0B32 0%, #1a1a4a 50%, #0B0B32 100%)'
      }}
    >
      {/* Efecto de partículas educativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-adv-red rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo/Texto principal */}
        <div className={`transition-all duration-700 ease-out ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-adv-red rounded-2xl flex items-center justify-center shadow-2xl">
              <AcademicCapIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat text-white mb-4 text-glow animate-fade-in-down">
            Academia del Valle
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-roboto animate-fade-in-up">
            Potenciando tu futuro
          </p>
        </div>

        {/* Barra de progreso */}
        <div className={`w-64 md:w-80 mx-auto transition-all duration-700 delay-300 ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="bg-gray-800 rounded-full h-3 mb-4 overflow-hidden shadow-lg">
            <div 
              className="progress-bar h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white text-sm font-roboto loading-shimmer">
            Cargando... {Math.round(progress)}%
          </p>
        </div>

        {/* Pasos de carga educativos */}
        <div className={`mt-8 transition-all duration-700 delay-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-4">
            {loadingSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 transition-all duration-500 ${
                  index <= currentStep 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-30 transform translate-x-4'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index <= currentStep ? 'bg-adv-red text-white' : 'bg-gray-600 text-gray-400'
                }`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium transition-all duration-300 ${
                  index <= currentStep ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Elementos decorativos educativos */}
        <div className={`mt-12 transition-all duration-700 delay-700 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex justify-center space-x-6">
            <div className="w-2 h-12 bg-gradient-to-t from-adv-red to-transparent rounded-full animate-bounce-slow"></div>
            <div className="w-2 h-16 bg-gradient-to-t from-adv-red to-transparent rounded-full animate-bounce-slow" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-8 bg-gradient-to-t from-adv-red to-transparent rounded-full animate-bounce-slow" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-2 h-14 bg-gradient-to-t from-adv-red to-transparent rounded-full animate-bounce-slow" style={{ animationDelay: '0.9s' }}></div>
          </div>
        </div>

        {/* Mensaje motivacional */}
        <div className={`mt-8 transition-all duration-700 delay-900 ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-gray-400 text-sm font-roboto animate-fade-in-up italic">
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo"
          </p>
        </div>
      </div>

      {/* Efecto de brillo en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-adv-red/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-adv-red/20 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default LoadingScreen; 