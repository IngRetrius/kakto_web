import React, { useState } from 'react';
import Button from '@/components/ui/Button';

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
    error: null as string | null // Corregido aquí
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      // Aquí iría la lógica real de envío de formulario
      console.log('Formulario enviado:', formData);
      
      // Simulamos una respuesta exitosa
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Resetear el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente.'
      });
    }
  };

  return (
    <div className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <h2 className="text-2xl font-bold text-[#2f3d4d] mb-6">Envíanos un mensaje</h2>
      
      {formStatus.isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          <p className="font-medium">¡Gracias por tu mensaje!</p>
          <p>Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
      ) : null}

      {formStatus.error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
          <p>{formStatus.error}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        {/* El resto del formulario permanece igual */}
        {/* ... */}
      </form>
    </div>
  );
};

export default ContactForm;