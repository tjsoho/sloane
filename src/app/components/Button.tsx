// src/components/Button.tsx
import React from 'react';
import Link from 'next/link'; // Use Next.js Link component if you are using Next.js
import { getTailwindColor } from '../../utils/tailwindColors';

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  textColor: string;
  textHoverColor: string;
  backgroundColor: string;
  hoverBG: string;
  onClick?: () => void;
  path?: string;
  borderColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  textColor,
  textHoverColor,
  backgroundColor,
  hoverBG,
  onClick,
  path,
  borderColor,
  className = '', // default to an empty string
}) => {
  const defaultTextColor = getTailwindColor(textColor);
  const hoverTextColor = getTailwindColor(textHoverColor);
  const bgColor = backgroundColor ? getTailwindColor(backgroundColor) : 'transparent';
  const bgHoverColor = hoverBG ? getTailwindColor(hoverBG) : bgColor;
  const borderCol = borderColor ? getTailwindColor(borderColor) : 'transparent';

  const buttonContent = (
    <button
      className={`flex items-center px-12 py-2 rounded-full uppercase font-Archivo hover:font-bold border-[1px] ${className}`}
      style={{ 
        color: defaultTextColor, 
        backgroundColor: bgColor,
        borderColor: borderCol 
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverTextColor;
        e.currentTarget.style.backgroundColor = bgHoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = defaultTextColor;
        e.currentTarget.style.backgroundColor = bgColor;
      }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );

  if (path) {
    return path.startsWith('http') ? (
      <a href={path} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    ) : (
      <Link href={path} legacyBehavior>
        <a className="inline-block">{buttonContent}</a>
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
