
import React from 'react';
import MailIcon from '../components/icons/MailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MapPinIcon from '../components/icons/MapPinIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat text-adv-blue">Conversemos</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">¿Tienes alguna pregunta? Estamos aquí para ayudarte a dar el siguiente paso en tu carrera.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Tu nombre completo" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="tu.email@ejemplo.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
              <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Tu número de teléfono" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-adv-red focus:border-adv-red" placeholder="Escribe tu consulta aquí..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-adv-red text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-300">
                Enviar Mensaje
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-montserrat text-adv-blue">Información de Contacto</h2>
            <div className="flex items-start">
              <MapPinIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Dirección</h3>
                <p className="text-gray-600">Tumbaco, Ecuador</p>
              </div>
            </div>
             <div className="flex items-start">
              <PhoneIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Teléfono</h3>
                <p className="text-gray-600">(+593) 123-456-789</p>
              </div>
            </div>
             <div className="flex items-start">
              <MailIcon className="w-8 h-8 mr-4 text-adv-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Email</h3>
                <p className="text-gray-600">info@academiadelvalle.ec</p>
              </div>
            </div>
            <div className="mt-6">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.256828552174!2d-78.4183424683515!3d-0.20310243431631027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59392e66d2181%3A0x62836f83d735b59a!2sTumbaco%2C%20Quito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" width="100%" height="250" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
