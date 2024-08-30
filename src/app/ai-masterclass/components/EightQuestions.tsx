'use client';

import React from 'react';
import Button from '~/app/components/Button';
import SimpleForm from '../../ai-masterclass/join-masterclass/page';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

function EightQuestions() {
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
    <div className="flex h-full w-full flex-col items-center justify-center bg-brand-cream px-4 py-16">
      <h3 className="text-center font-Quicksand text-2xl text-brand-orange lg:w-1/2 lg:text-4xl">
        Bring along your questions, curiosity, and excitement as Toby shows you how Ai can transform your business without the tech hassle.
        <br />
        <br /> 
        If you can't attend, simply email your questions, and we'll send you the recording along with answers to all queries!
      </h3>
      <div className="my-12 flex w-full justify-center">
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

export default EightQuestions;
