// src/components/FloatingButton.tsx
import React from 'react';
import { getTailwindColor } from '../../../utils/tailwindColors'; // Make sure you have this utility

interface FloatingButtonProps {
  title: string;
  textColor: string;
  backgroundColor: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  title,
  textColor,
  backgroundColor,
}) => {
  return (
    <div
      className="floating-button absolute transform rounded-full px-4 py-2 text-center  transition-transform duration-300"
      style={{
        color: getTailwindColor(textColor),
        backgroundColor: getTailwindColor(backgroundColor),
        borderColor: getTailwindColor(backgroundColor),
      }}
    >
      {title}
    </div>
  );
};

export default FloatingButton;
