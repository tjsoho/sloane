// hooks/useModal.ts
import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = () => {
    setIsPaymentPage(true);
  };

  return {
    isModalOpen,
    isPaymentPage,
    openModal,
    closeModal,
    handleFormSubmit,
  };
};
