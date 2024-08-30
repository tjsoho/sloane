'use client';

import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';
import Button from '~/app/components/Button';
import SimpleForm from '../../ai-masterclass/join-masterclass/page';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

function SevenDontMiss() {
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
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full bg-brand-green p-4 md:w-1/2">
        <div className="flex h-full w-full items-center justify-center p-4">
          <h2 className="z-50 text-center text-4xl text-brand-logo md:w-2/3 lg:text-6xl">
            A Webinar You Don't Want to Miss
          </h2>
        </div>

        {/* SVG Image positioned in the bottom-left corner */}
        <img
          src="/images/palms.svg" // Replace with the correct path to your SVG file
          alt="Decorative SVG"
          className="absolute bottom-0 left-0 z-10 h-32 w-32 lg:h-72 lg:w-72"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between bg-brand-cream p-4 md:w-1/2 lg:py-16">
        <div className="my-12 flex flex-col items-center text-center lg:w-2/3">
          <SpaIcon className="mb-4 text-4xl text-brand-green" />
          <p className="text-[21px] text-brand-green">
            <span className="font-bold">Easy Peasy Ai:</span> Make sense of complex tools in a way that’s clear and simple.
          </p>
        </div>
        <div className="flex flex-col items-center text-center lg:w-2/3">
          <SpaIcon className="mb-4 text-4xl text-brand-green" />
          <p className="text-[21px] text-brand-green">
            <span className="font-bold">Personalised Insights:</span> Learn how to integrate Ai into your unique business landscape.
          </p>
        </div>
        <div className="my-12 flex flex-col items-center text-center lg:w-1/2">
          <SpaIcon className="mb-4 text-4xl text-brand-green" />
          <p className="text-[21px] text-brand-green">
            <span className="font-bold">More Free Time</span> Discover how to simplify tasks and free up more time for what you love.
          </p>
        </div>

        <div className="my-12 flex w-full justify-center">
          <Button
            title="reserve your spot"
            textColor="brand-cream"
            textHoverColor="brand-logo"
            backgroundColor="brand-green"
            hoverBG="brand-green-dark"
            ariaLabel="Reserve Your Spot"
            onClick={openModal}  // Trigger the modal on button click
          />
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default SevenDontMiss;
