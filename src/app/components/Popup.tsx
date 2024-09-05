'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import Button from '~/app/components/Button';

interface PopupProps {
  title: string;
  image: string;
  subheading: string;
  paragraph: string;
  buttonText: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  image,
  subheading,
  paragraph,
  buttonText,
  onClose,
}) => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleButtonClick = () => {
    router.push('/ai-masterclass'); // Navigate to /ai-masterclass when the button is clicked
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-auto max-w-lg rounded-2xl bg-brand-cream p-8">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-3xl font-bold text-brand-green">{title}</h2>
        </div>
        <img
          src={image}
          alt={title}
          className="mt-4 h-auto w-full rounded-xl shadow-lg"
        />
        <h3 className="mt-4 text-lg font-semibold text-brand-green">
          {subheading}
        </h3>
        <p className="mt-2 text-brand-green-dark">{paragraph}</p>
        <div className="mt-4 flex flex-col items-center">
          <Button
            title={buttonText}
            textColor="brand-cream"
            textHoverColor="brand-logo"
            backgroundColor="brand-green"
            hoverBG="brand-green-dark"
            ariaLabel={buttonText}
            onClick={handleButtonClick} // Change the click handler to navigate to /ai-masterclass
          />
          <button
            onClick={onClose}
            className="mt-2 text-brand-green hover:text-brand-green-dark underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
