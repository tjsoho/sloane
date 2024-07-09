"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Animations/Reveal";
import Button2 from "../Button2";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const MobileFloating = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const randomScale = () => 0.8 + Math.random() * 0.1; // Random scale between 1 and 1.3

  return (
    <div className="bg-brand-green flex h-full w-full py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
        {/* ---------------------------------------------------------row 1 ---------------------------------------------------------*/}
        <div className="my-6 flex w-full justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-2"
          >
            <Button2
              title="Your go-to for all how-to's"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Your go-to for all how-to's", "Content for all how-to's")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 2 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Product Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Product Ideation", "Content for Product Ideation")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Blog Ideas"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Blog Ideas", "Content for Blog Ideas")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 3 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-2"
          >
            <Button2
              title="SEO"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("SEO", "Content for SEO")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Business Planning"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={() => handleOpenModal("Business Planning", "Content for Business Planning")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 4 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-2"
          >
            <Button2
              title="Content Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Content Ideation", "Content for Content Ideation")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={() => handleOpenModal("Sales Funnels", "Content for Sales Funnels")}
            />
          </motion.div>
        </div>
        {/* ------------------------------------------------ MAIN ROW ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center"></div>
        {/* ----------------------------- main row ----------------------------- */}
        <div className="my-8 flex w-full items-center justify-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-brand-cream text-[64px] leading-none lg:text-[98px]">
                Create
              </h3>
              <h3 className="text-brand-cream text-[32px] leading-none lg:text-[48px]">
                with <span className="text-brand-logo text-center">sloane.</span>
              </h3>
            </div>
          </Reveal>
        </div>
        {/* row 4 */}
        <div className="my-4 flex w-full justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Client Communication"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Client Communication", "Content for Client Communication")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 5 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-4"
          >
            <Button2
              title="Training & Onboarding"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Training & Onboarding", "Content for Training & Onboarding")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-4"
          >
            <Button2
              title="Website Copy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Website Copy", "Content for Website Copy")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 6 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-2"
          >
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Sales Funnels", "Content for Sales Funnels")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6"
          >
            <Button2
              title="Socials Strategy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={() => handleOpenModal("Socials Strategy", "Content for Socials Strategy")}
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 7 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-6 mt-4"
          >
            <Button2
              title="New Offerings"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("New Offerings", "Content for New Offerings")}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mx-8 mt-2"
          >
            <Button2
              title="Course Creation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={() => handleOpenModal("Course Creation", "Content for Course Creation")}
            />
          </motion.div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-32">
          <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
          <p>{modalContent.content}</p>
          <button
            onClick={handleCloseModal}
            className="mt-4 bg-brand-green text-brand-cream py-2 px-4 rounded-full hover:bg-brand-green-dark transition duration-300"
          >
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default MobileFloating;
