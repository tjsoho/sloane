// src/app/components/Popup.tsx
'use client';

import React, { useEffect } from 'react';
import Button from '~/app/components/Button';

interface PopupProps {
  title: string;
  image: string;
  subheading: string;
  paragraph: string;
  buttonText: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, image, subheading, paragraph, buttonText, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-brand-cream p-8 rounded-2xl max-w-lg mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-brand-green">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <img src={image} alt={title} className="w-full h-auto mt-4 rounded-xl shadow-lg" />
        <h3 className="text-lg font-semibold mt-4 text-brand-green">{subheading}</h3>
        <p className="text-brand-green-dark mt-2">{paragraph}</p>
        <div className="mt-4">
          <Button
            title={buttonText}
            textColor="brand-cream"
            textHoverColor="brand-logo"
            backgroundColor="brand-green"
            hoverBG="brand-green-dark"
            ariaLabel={buttonText}
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
