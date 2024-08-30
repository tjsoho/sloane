'use client';

import React from 'react';
import Button from '~/app/components/Button';
import SimpleForm from '../../ai-masterclass/join-masterclass/page';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

function FourBizLect() {
  const { isModalOpen, openModal, closeModal, isPaymentPage, handleFormSubmit,  } = useModal();

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
    <div className="flex justify-center items-center w-full h-full bg-brand-cream py-16 px-4 flex-col">
      <h3 className="text-2xl lg:text-4xl font-Quicksand text-brand-orange lg:w-1/2 text-center">
        This isn’t just another business lecture. It’s your ticket to smooth and easy daily operations.
        <br /><br /> 
        Learn from the same presentation that wowed attendees at a recent business event, now tailored for your unique needs.
      </h3>
      <div className="flex w-full justify-center my-12">
        <Button
          title="reserve your spot"
          textColor="brand-cream"
          textHoverColor="brand-logo"
          backgroundColor="brand-orange"
          hoverBG="brand-green-dark"
          ariaLabel="Reserve Your Spot"
          onClick={openModal}  // Trigger the modal on button click
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default FourBizLect;
