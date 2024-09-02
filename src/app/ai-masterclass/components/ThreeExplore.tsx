'use client';

import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react';
import Button from '~/app/components/Button';
import SimpleForm from './SimpleForm';
import Modal from '~/app/components/Modal';
import { useModal } from '../../../hooks/useModal';

function ThreeExplore() {
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
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full bg-brand-green p-4 md:w-1/2">
          <div className="flex h-full w-full items-center justify-center p-4">
            <h2 className="text-center text-4xl text-brand-logo md:w-1/2 lg:text-6xl">
              What We'll Explore Together<span className='text-xl text-brand-cream leading-none'><br></br>In 90 Mins</span>
            </h2>
          </div>

          {/* SVG Image positioned in the bottom-left corner */}
          <img
            src="/images/palms.svg"
            alt="Decorative SVG"
            className="lg:h-[400px] lg:w-[400px] absolute bottom-0 left-0 z-10 h-32 w-32"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-between bg-brand-cream p-4 md:w-1/2 lg:py-16">
          <div className="my-12 flex flex-col items-center text-center lg:w-2/3">
            {/* Icon */}
            <VerifiedIcon className="mb-4 text-4xl text-brand-green" />

            {/* Text with bolded opening phrase */}
            <p className="text-[21px] text-brand-green">
              <span className="font-bold">Ai Assistants:</span> Discover how Ai
              can become your personal helper, handling tasks effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:w-2/3">
            <VerifiedIcon className="mb-4 text-4xl text-brand-green" />
            <p className="text-[21px] text-brand-green">
              <span className="font-bold">Chatbots:</span> Learn how chatbots
              can interact with your clients, saving you time and effort.
            </p>
          </div>
          <div className="my-12 flex flex-col items-center text-center lg:w-1/2">
            <VerifiedIcon className="mb-4 text-4xl text-brand-green" />
            <p className="text-[21px] text-brand-green">
              <span className="font-bold">Automation</span> Find out how to
              streamline your operations, giving you more free time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:w-2/3">
            <VerifiedIcon className="mb-4 text-4xl text-brand-green" />
            <p className="text-[21px] text-brand-green">
              <span className="font-bold">Ai Image Generation:</span> See how
              you can create visuals with zero technical skills.
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
              onClick={openModal}
            />
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

export default ThreeExplore;
