import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppPopup.css';

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePopupClick = () => {
    // Replace '123456789' with your actual WhatsApp number
    const whatsappNumber = '8184962746';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="whatsapp-popup" onClick={handlePopupClick}>
        <FaWhatsapp />
      </div>
    )
  );
};

export default WhatsAppPopup;
