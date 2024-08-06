'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTailwindColor } from '../../../utils/tailwindColors';

const AnimatedCircle: React.FC<{ number: number; step: React.ReactNode }> = ({
  number,
  step,
}) => {
  const brandGreen = getTailwindColor('brand-green');
  const brandCream = getTailwindColor('brand-cream');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '60px',
    marginTop: '60px',
    marginInline: '100px',
  };

  const innerCircleStyle: React.CSSProperties = {
    position: 'absolute',
    border: `2px solid ${brandGreen}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    backgroundColor: `${brandCream}`,
  };

  const numberStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: brandGreen,
    fontFamily: 'Archivo Black',
  };

  const outerCircleStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex: 1,
  };

  const innerCircleSize = isMobile ? 120 : 150;
  const outerCircleSize = isMobile ? 160 : 180; // Increase the size to create more gap
  const fontSize = isMobile ? '3rem' : '4rem';
  const circleRadius = (outerCircleSize - 6) / 2; // Adjust radius to match size
  const circleCenter = outerCircleSize / 2; // Center of the circle

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          ...containerStyle,
          width: innerCircleSize,
          height: innerCircleSize,
          marginBottom: isMobile ? '40px' : '60px',
          marginTop: isMobile ? '40px' : '60px',
          marginInline: isMobile ? '80px' : '100px',
        }}
      >
        <div
          style={{
            ...innerCircleStyle,
            width: innerCircleSize,
            height: innerCircleSize,
          }}
        >
          <span
            style={{
              ...numberStyle,
              fontSize: fontSize,
            }}
          >
            {number}
          </span>
        </div>
        <motion.svg
          style={{
            ...outerCircleStyle,
            width: outerCircleSize,
            height: outerCircleSize,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          <circle
            cx={circleCenter}
            cy={circleCenter}
            r={circleRadius}
            stroke={brandGreen}
            strokeWidth="2"
            fill="none"
            strokeDasharray="7, 10"
          />
        </motion.svg>
      </div>
      <div className="text-center">
        <p className="text-brand-green font-Archivo">{step}</p>
      </div>
    </div>
  );
};

export default AnimatedCircle;
