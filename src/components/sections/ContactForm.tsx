// src/components/sections/ContactForm.tsx
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Formulario enviado", formData);
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    // Agregamos fecha y año para la plantilla
    const templateParams = {
      ...formData,
      fecha: new Date().toLocaleString(),
      year: new Date().getFullYear().toString()
    };

    // MÉTODO DIRECTO - Reemplaza el envío anterior
    emailjs.send(
      'service_24hxceo',
      'template_contact',
      templateParams,
      'gLpQGSpLCrFU1czDe'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: `Error al enviar: ${err.text || 'Problema desconocido'}`
      });
    });
  };

  return (
    <div className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2f3d4d] to-[#e94c46]"></div>
      
      <h2 className="text-2xl font-bold text-[#2f3d4d] mb-6">Envíanos un mensaje</h2>
      
      {formStatus.isSubmitted ? (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6 animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p className="font-medium">¡Gracias por tu mensaje!</p>
          </div>
          <p className="mt-2">Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
      ) : null}

      {formStatus.error ? (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
            <p>{formStatus.error}</p>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#2f3d4d] font-medium mb-2">Nombre completo *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94c46] focus:border-transparent transition-all duration-300"
            placeholder="Tu nombre"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-[#2f3d4d] font-medium mb-2">Correo electrónico *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94c46] focus:border-transparent transition-all duration-300"
              placeholder="ejemplo@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[#2f3d4d] font-medium mb-2">Teléfono</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94c46] focus:border-transparent transition-all duration-300"
              placeholder="+57 3XX XXX XXXX"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-[#2f3d4d] font-medium mb-2">Asunto *</label>
          <select 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94c46] focus:border-transparent transition-all duration-300"
          >
            <option value="">Selecciona una opción</option>
            <option value="Proyecto nuevo">Proyecto nuevo</option>
            <option value="Consulta general">Consulta general</option>
            <option value="Propuesta de colaboración">Propuesta de colaboración</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-[#2f3d4d] font-medium mb-2">Mensaje *</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94c46] focus:border-transparent transition-all duration-300"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <Button 
            type="submit" 
            variant="primary" 
            disabled={formStatus.isSubmitting}
            className="py-3 px-8 text-base font-medium tracking-wide mb-4 md:mb-0"
          >
            {formStatus.isSubmitting ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </div>
            ) : 'Enviar mensaje'}
          </Button>
          <p className="text-xs text-gray-500">
            * Campos obligatorios
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Al enviar este formulario, aceptas nuestra política de privacidad y el uso de tus datos para responder a tu consulta.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;