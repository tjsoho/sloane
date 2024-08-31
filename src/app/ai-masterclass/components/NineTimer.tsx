// components/CountdownTimer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import SimpleForm from './SimpleForm';
import Button from '~/app/components/Button';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

// Constants for styling numbers and labels
const numberStyle = 'text-5xl lg:text-6xl font-bold text-brand-logo';
const labelStyle = 'text-sm font-medium text-brand-cream mt-2';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const padWithZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

const CountdownTimer: React.FC = () => {
  const {
    isModalOpen,
    isPaymentPage,
    openModal,
    closeModal,
    handleFormSubmit,
  } = useModal();

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('September 10, 2024 11:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderModalContent = () => {
    if (isPaymentPage) {
      return (
        <div className="p-8">
          <h2 className="text-center text-2xl font-bold text-brand-cream">
            Thank You
          </h2>
          <p className="text-center text-brand-cream">
            Taking you to payment...
          </p>
        </div>
      );
    }

    return <SimpleForm onFormSubmit={handleFormSubmit} />;
  };

  if (!timeLeft) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-brand-green">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full justify-center p-4">
            <h2 className="text-4xl font-semibold text-brand-logo">
              Upcoming Event
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <span className={numberStyle}>--</span>
                <span className={labelStyle}>Days</span>
              </div>
              <div className=" text-6xl font-bold text-brand-logo">:</div>
              <div className="flex flex-col items-center">
                <span className={numberStyle}>--</span>
                <span className={labelStyle}>Hours</span>
              </div>
              <div className=" text-6xl font-bold text-brand-logo">:</div>
              <div className="flex flex-col items-center">
                <span className={numberStyle}>--</span>
                <span className={labelStyle}>Minutes</span>
              </div>
              <div className=" text-6xl font-bold text-brand-logo">:</div>
              <div className="flex flex-col items-center">
                <span className={numberStyle}>--</span>
                <span className={labelStyle}>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-brand-green">
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="mb-8 flex w-full justify-center p-4">
          <h2 className="text-4xl text-brand-cream lg:text-5xl">
            Ai Masterclass
          </h2>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <span className={numberStyle}>{padWithZero(timeLeft.days)}</span>
              <span className={labelStyle}>Days</span>
            </div>
            <div className="-mt-2 text-6xl font-bold text-brand-logo lg:mt-0">
              :
            </div>
            <div className="flex flex-col items-center">
              <span className={numberStyle}>{padWithZero(timeLeft.hours)}</span>
              <span className={labelStyle}>Hours</span>
            </div>
            <div className="-mt-2 text-6xl font-bold text-brand-logo lg:mt-0">
              :
            </div>
            <div className="flex flex-col items-center">
              <span className={numberStyle}>
                {padWithZero(timeLeft.minutes)}
              </span>
              <span className={labelStyle}>Minutes</span>
            </div>
            <div className="-mt-2 text-6xl font-bold text-brand-logo lg:mt-0">
              :
            </div>
            <div className="flex flex-col items-center">
              <span className={numberStyle}>
                {padWithZero(timeLeft.seconds)}
              </span>
              <span className={labelStyle}>Seconds</span>
            </div>
          </div>
        </div>

        <div className="my-8 flex w-full justify-center p-4">
          <p className="text-center text-[21px] text-brand-cream">
            Join us on Tuesday, 10th September at 11:00 AM <br></br> <br></br>
            For those unable to attend, email any questions you have, and we'll
            send you the recording!
          </p>
        </div>
        <div className="flex w-full justify-center">
          <Button
            title="reserve your spot"
            textColor="brand-green"
            textHoverColor="brand-logo"
            backgroundColor="brand-logo"
            hoverBG="brand-green-dark"
            ariaLabel="Reserve Your Spot"
            onClick={openModal}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default CountdownTimer;
