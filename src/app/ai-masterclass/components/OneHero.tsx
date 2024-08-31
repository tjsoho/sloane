'use client';

import React from 'react';
import Button from '~/app/components/Button';
import Modal from '~/app/components/Modal';
import SimpleForm from './SimpleForm';
import { useModal } from '../../../hooks/useModal';

const Hero: React.FC = () => {
  const {
    isModalOpen,
    isPaymentPage,
    openModal,
    closeModal,
    handleFormSubmit,
  } = useModal();

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

  return (
    <div className="h-full w-full bg-brand-green ">
      <div className="mx-auto flex max-w-[1240px] px-4 py-16 md:flex-row 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col justify-center p-4 md:w-1/2">
          <div>
            <h1 className="text-9xl leading-none text-brand-logo">Ai</h1>
            <h1 className="-mt-3 text-5xl leading-none text-brand-logo lg:text-6xl">
              Masterclass
            </h1>
            <p className="text-brand-cream lg:text-2xl">
              11am Tuesday 10th September
            </p>
          </div>
          <p className="my-8 text-2xl text-brand-cream lg:my-12 lg:w-3/4 lg:text-4xl">
            For Business Owners who are curious about the Ai landscape.
          </p>
          <div className="flex w-full justify-center lg:justify-start">
            <Button
              title="reserve your spot"
              textColor="brand-green"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              ariaLabel="Reserve Your Spot"
              onClick={openModal} // Open modal on click
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-center p-4 md:w-1/2">
          <div className="w-full lg:p-16 ">
            <div className="w-full">
              <img
                src="/images/ai-masterclass.png"
                alt="Sloane.Ai Masterclass"
                className="h-full w-full rounded-lg object-cover lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Hero;
