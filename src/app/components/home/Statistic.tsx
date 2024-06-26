// src/components/Statistic.tsx
import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface StatisticProps {
  percentage: number;
  subheading: string;
  imageUrl: string;
}

const Statistic: React.FC<StatisticProps> = ({ percentage, subheading, imageUrl }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = percentage;
      const duration = 2000; // duration in milliseconds
      const incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className='flex flex-col justify-center items-center'>
      <h2 className='font-Archivo text-6xl text-brand-green'>{count}%</h2>
      <h3 className='text-brand-green text-xl'>{subheading}</h3>
      <div className='flex justify-center items-baseline'>
      <div>
        <img src={imageUrl} alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth" className="w-[60px] lg:w-[100%] h-auto mt-2 "/>
      </div>
      </div>
    </div>
  );
};

export default Statistic;
