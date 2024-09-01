import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatisticProps {
  heading?: string;
  percentage?: number;
  subheading: string;
  imageUrl: string;
  className?: string;
}

const Statistic: React.FC<StatisticProps> = ({ heading, percentage, subheading, imageUrl, className }) => {
  const [count, setCount] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && percentage !== undefined) {
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
    <div ref={ref} className="flex flex-col justify-center items-center">
      {heading && <h2 className="font-Archivo text-6xl text-brand-green">{heading}</h2>}
      {percentage !== undefined && <h2 className="font-Archivo text-6xl text-brand-green">{count}%</h2>}
      <h3 className="text-brand-green text-xl">{subheading}</h3>
      <div className="flex justify-center items-baseline">
        <div>
          <img
            src={imageUrl}
            alt="Sloane AI Business Platform - Marketing, Business Coach, Social Media Strategy, Business Growth"
            className={`mt-4 ${className}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
