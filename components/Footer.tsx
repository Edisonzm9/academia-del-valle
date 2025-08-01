import React from 'react';
import { LOGO_URL } from '../constants';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import MapPinIcon from './icons/MapPinIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-adv-blue text-white" id="contacto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={LOGO_URL} alt="Academia del Valle EC Logo" className="h-16 bg-white p-2 rounded-md mb-4" />
            <p className="text-center md:text-left text-gray-300">Potenciando tu futuro a través de una educación práctica, flexible y certificada.</p>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-3 text-adv-red" />
                <span>Tumbaco, Ecuador</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-adv-red" />
                <a href="tel:+593123456789" className="hover:text-adv-red transition-colors">(+593) 123-456-789</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-adv-red" />
                <a href="mailto:info@academiadelvalle.ec" className="hover:text-adv-red transition-colors">info@academiadelvalle.ec</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#cursos" className="hover:text-adv-red transition-colors">Cursos</a></li>
              <li><a href="#nosotros" className="hover:text-adv-red transition-colors">Nosotros</a></li>
              <li><a href="#certificaciones" className="hover:text-adv-red transition-colors">Certificaciones</a></li>
              <li><a href="#contacto" className="hover:text-adv-red transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Academia del Valle EC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;