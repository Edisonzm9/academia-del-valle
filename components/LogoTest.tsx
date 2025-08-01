import React from 'react';
import { ASSETS } from '../constants';

const LogoTest: React.FC = () => {
  const testLogos = [
    { name: 'Ministerio del Trabajo', path: ASSETS.CERTIFICATIONS.MINISTERIO_TRABAJO },
    { name: 'SENESCYT', path: ASSETS.CERTIFICATIONS.SENESCYT },
    { name: 'Cámara de Artesanos', path: ASSETS.CERTIFICATIONS.CAMARA_ARTESANOS },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Prueba de Logos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testLogos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">{logo.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Ruta: {logo.path}</p>
            <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
              <img 
                src={logo.path} 
                alt={logo.name}
                className="max-h-20 max-w-full object-contain"
                onLoad={() => console.log(`✅ ${logo.name} cargado exitosamente`)}
                onError={(e) => {
                  console.error(`❌ Error cargando ${logo.name}:`, e);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<p class="text-red-500">Error cargando imagen</p>`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTest; 