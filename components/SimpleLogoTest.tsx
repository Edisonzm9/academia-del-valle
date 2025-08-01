import React from 'react';

const SimpleLogoTest: React.FC = () => {
  const testPaths = [
    '/images/logo-ministerio.webp',
    '/images/logo-senescyt.webp', 
    '/images/logo-camara.webp',
    './images/logo-ministerio.webp',
    './images/logo-senescyt.webp',
    './images/logo-camara.webp'
  ];

  return (
    <div className="p-8 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-600">🔍 PRUEBA DE LOGOS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {testPaths.map((path, index) => (
          <div key={index} className="bg-white p-4 rounded border">
            <p className="text-xs text-gray-600 mb-2">Ruta: {path}</p>
            <div className="h-20 bg-gray-50 rounded flex items-center justify-center">
              <img 
                src={path} 
                alt={`Test ${index}`}
                className="max-h-16 max-w-full object-contain"
                onLoad={() => console.log(`✅ ÉXITO: ${path}`)}
                onError={(e) => {
                  console.error(`❌ ERROR: ${path}`);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<p class="text-red-500 text-xs">❌ Error</p>`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-blue-100 rounded">
        <h3 className="font-bold mb-2">Información de debug:</h3>
        <p className="text-sm">Abre la consola del navegador (F12) para ver los logs de carga</p>
        <p className="text-sm">✅ = Imagen cargada exitosamente</p>
        <p className="text-sm">❌ = Error cargando imagen</p>
      </div>
    </div>
  );
};

export default SimpleLogoTest; 