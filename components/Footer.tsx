import React, { useState } from 'react';
import { LOGO_URL } from '../constants';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

// Componente de logo temporal
const TempLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-16 h-16 bg-adv-red rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-2xl">A</span>
    </div>
    <div>
      <div className="text-adv-blue font-bold text-xl">Academia del Valle</div>
      <div className="text-gray-600 text-sm">EC</div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-adv-blue text-white" id="contacto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            {logoError ? (
              <div className="mb-6">
                <TempLogo />
              </div>
            ) : (
              <img 
                src={LOGO_URL} 
                alt="Academia del Valle EC Logo" 
                className="h-20 bg-white p-3 rounded-xl mb-6 shadow-lg"
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-center md:text-left text-gray-300 text-lg leading-relaxed">Potenciando tu futuro a través de una educación práctica, flexible y certificada.</p>
          </div>
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-white mb-8 text-center md:text-left">Contacto</h3>
            <ul className="space-y-6">
              <li className="flex items-center group">
                <div className="w-12 h-12 bg-adv-red rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block text-lg">Tumbaco, Ecuador</span>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-12 h-12 bg-adv-red rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <a href="tel:+593123456789" className="text-lg hover:text-adv-red transition-colors duration-300">(+593) 123-456-789</a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-12 h-12 bg-adv-red rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <a href="mailto:info@academiadelvalle.ec" className="text-lg hover:text-adv-red transition-colors duration-300">info@academiadelvalle.ec</a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-white mb-8 text-center md:text-left">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#cursos" className="text-lg hover:text-adv-red transition-colors duration-300 block py-2">Cursos</a></li>
              <li><a href="#nosotros" className="text-lg hover:text-adv-red transition-colors duration-300 block py-2">Nosotros</a></li>
              <li><a href="#certificaciones" className="text-lg hover:text-adv-red transition-colors duration-300 block py-2">Certificaciones</a></li>
              <li><a href="#contacto" className="text-lg hover:text-adv-red transition-colors duration-300 block py-2">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} Academia del Valle EC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;