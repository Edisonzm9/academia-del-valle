
import React from 'react';
import { ASSETS } from '../constants';
import LogoTest from '../components/LogoTest';
import SimpleLogoTest from '../components/SimpleLogoTest';

interface CertificationLogoProps {
  name: string;
  logoPath: string;
  description?: string;
}

const CertificationLogo: React.FC<CertificationLogoProps> = ({ name, logoPath, description }) => (
  <div className="bg-white p-8 flex flex-col items-center justify-center rounded-2xl shadow-xl h-56 transform hover:scale-105 transition-all duration-300 border border-gray-100">
    <div className="flex-1 flex items-center justify-center mb-4">
      <img 
        src={logoPath} 
        alt={`Logo ${name}`} 
        className="max-h-24 max-w-full object-contain filter drop-shadow-sm"
        onError={(e) => {
          // Fallback si la imagen no carga
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
      {/* Fallback de texto si la imagen no carga */}
      <span className="text-xl font-bold text-center text-adv-blue hidden">{name}</span>
    </div>
    <h3 className="text-lg font-bold text-center text-adv-blue mb-2">{name}</h3>
    {description && (
      <p className="text-sm text-gray-600 text-center leading-relaxed">{description}</p>
    )}
  </div>
);

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      name: "Ministerio del Trabajo",
      logoPath: ASSETS.CERTIFICATIONS.MINISTERIO_TRABAJO,
      description: "Certificación oficial del Ministerio del Trabajo del Ecuador"
    },
    {
      name: "SENESCYT", 
      logoPath: ASSETS.CERTIFICATIONS.SENESCYT,
      description: "Secretaría de Educación Superior, Ciencia, Tecnología e Innovación"
    },
    {
      name: "Cámara de Comercio de Artesanos",
      logoPath: ASSETS.CERTIFICATIONS.CAMARA_ARTESANOS, 
      description: "Cámara de Comercio de Artesanos de Quito"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Componente de prueba simple */}
        <SimpleLogoTest />
        
        {/* Componente de prueba temporal */}
        <LogoTest />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat text-adv-blue mb-6">Educación Certificada con Respaldo Oficial</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            Tu futuro está en buenas manos. Estamos orgullosos de contar con la certificación y el respaldo de las instituciones más importantes del país, garantizando la calidad y validez de tu formación.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <CertificationLogo 
              key={index}
              name={cert.name}
              logoPath={cert.logoPath}
              description={cert.description}
            />
          ))}
        </div>
        
        {/* Sección adicional con información sobre las certificaciones */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat text-adv-blue mb-4">¿Por qué elegir una academia certificada?</h2>
            <p className="text-gray-600">Nuestras certificaciones garantizan que tu formación cumple con los más altos estándares de calidad.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-adv-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-adv-blue mb-2">Reconocimiento Oficial</h3>
              <p className="text-gray-600">Nuestros certificados son reconocidos por instituciones gubernamentales y empresas del sector.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-adv-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-adv-blue mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Programas educativos que cumplen con estándares internacionales de calidad.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <img src="https://picsum.photos/seed/graduation/800/400" alt="Estudiante graduado" className="rounded-lg shadow-xl mx-auto" />
            <p className="mt-6 text-gray-600 italic">Invierte en una educación que te abre puertas.</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
