'use client';

import React from 'react';

interface SpeechBubbleProps {
  text: string;
  type?: 'sent' | 'received';
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text,
  type = 'sent', // Default to sent (right-aligned) message
  className = '',
}) => {
  return (
    <div
      className={`relative max-w-[80%] ${type === 'sent' ? 'ml-auto' : 'mr-auto'} ${className}`}
      style={{ isolation: 'isolate' }} // Ensures no background blending
    >
      <div
        className={`
          font-poppins relative rounded-[1.3rem] p-4 text-[18px] leading-[1.4] shadow-md  font-medium
          ${
            type === 'sent'
              ? 'rounded-tr-sm bg-brand-green text-black'
              : 'rounded-tl-sm bg-[#e1cea6] text-black'
          }
        `}
        style={{ backgroundColor: '#e1cea6' }} // Force solid background color
      >
        {text}
        {/* Tail for the speech bubble */}
        <div
          className={`
            absolute top-0 h-4 w-4
            ${
              type === 'sent'
                ? '-right-2 bg-brand-green [clip-path:polygon(0%_0%,_100%_100%,_0%_100%)]'
                : '-left-2 bg-[#e1cea6] [clip-path:polygon(100%_0%,_100%_100%,_0%_100%)]'
            }
          `}
          style={{ backgroundColor: '#e1cea6' }} // Force solid background color for tail
        />
      </div>
    </div>
  );
};

export default SpeechBubble;
