'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { getTailwindColor } from '../../../utils/tailwindColors';

const AnimatedCircle: React.FC<{ number: number; step: React.ReactNode }> = ({
  number,
  step,
}) => {
  const brandGreen = getTailwindColor('brand-green');
  const brandCream = getTailwindColor('brand-cream');

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

  const isMobile = window.innerWidth < 768;

  const innerCircleSize = isMobile ? 120 : 150;
  const outerCircleSize = isMobile ? 150 : 170;
  const fontSize = isMobile ? '3rem' : '4rem';
  const circleRadius = isMobile ? 75 : 85;
  const circleCenter = isMobile ? 75 : 85;

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
