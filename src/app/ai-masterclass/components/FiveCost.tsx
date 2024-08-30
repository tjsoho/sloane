'use client';

import React from 'react';
import Button from '~/app/components/Button';
import SimpleForm from '../../ai-masterclass/join-masterclass/page';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

function FiveCost() {
  const { isModalOpen, openModal, closeModal, isPaymentPage, handleFormSubmit } = useModal();

  const renderModalContent = () => {
    if (isPaymentPage) {
      return (
        <div className="p-8">
          <h2 className="text-center text-2xl font-bold text-brand-cream">Thank You</h2>
          <p className="text-center text-brand-cream">Taking you to payment...</p>
        </div>
      );
    }

    return <SimpleForm onFormSubmit={handleFormSubmit} />;
  };

  return (
    <div className="h-full w-full bg-brand-green">
      <div className="mx-auto flex flex-col max-w-[1240px] px-4 py-16 md:flex-row 2xl:max-w-[1540px]">
        <div className="flex w-full flex-col justify-center p-4 md:w-1/2">
          <div>
            <p className="my-8 text-4xl text-brand-cream lg:my-12 lg:w-3/4 lg:text-6xl font-Archivo">
              Everything you need to know about Ai
            </p>
            <p className="text-brand-cream text-4xl">
              11am Tuesday 10th September
            </p>
            <p className="text-brand-cream lg:text-xl my-8">
              Can't attend? <br />
              Full recording available to watch with your questions answered.
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-start">
            <Button
              title="reserve your spot"
              textColor="brand-green"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              ariaLabel="Reserve Your Spot"
              onClick={openModal} // Open modal on button click
            />
          </div>
        </div>

        <div className="flex w-full justify-center p-4 md:w-1/2">
          <div className="flex w-full items-center justify-center lg:p-16">
            
            <div className="flex w-full items-end justify-center text-brand-cream">
              <p className="font-Archivo text-6xl leading-none mb-8">$</p>
              <p className="font-Archivo text-[172px] leading-none">19</p>
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
}

export default FiveCost;
