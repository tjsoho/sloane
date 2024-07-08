'use client';
import { useState } from 'react';
import { Reveal } from "../Animations/Reveal";
import Button2 from "../Button2";
import { motion } from "framer-motion";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Floating = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleOpenModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const randomScale = () => 0.8 + Math.random() * 0.3; // Random scale between 0.8 and 1.3

  const buttonsData = [
    { title: "Your go-to for all how-to's", content: 'Content for all how-to\'s' },
    { title: 'Product Ideation', content: 'Content for Product Ideation' },
    { title: 'Business Planning', content: 'Content for Business Planning' },
    { title: 'Client Communications', content: 'Content for Client Communications' },
    { title: 'Marketing Strategies', content: 'Content for Marketing Strategies' },
    { title: 'Blog Ideas', content: 'Content for Blog Ideas' },
    { title: 'SEO', content: 'Content for SEO' },
    { title: 'Social Media Captions', content: 'Content for Social Media Captions' },
    { title: 'Email Marketing', content: 'Content for Email Marketing' },
    { title: 'Training & Onboarding', content: 'Content for Training & Onboarding' },
    { title: 'Website Copy', content: 'Content for Website Copy' },
    { title: 'Sales Funnels', content: 'Content for Sales Funnels' },
    { title: 'Efficient Workflows', content: 'Content for Efficient Workflows' },
    { title: 'Social Media Strategy', content: 'Content for Social Media Strategy' },
    { title: 'New Offerings', content: 'Content for New Offerings' },
    { title: 'Course Creation', content: 'Content for Course Creation' },
  ];

  return (
    <div className="bg-brand-green flex h-full w-full py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1240px] 2xl:max-w-[1540px] flex-col items-center justify-center">
        {/* row 1 */}
        <div className="my-6 flex w-full justify-center">
          {buttonsData.slice(0, 2).map((button, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, randomScale(), 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="mx-4"
            >
              <Button2
                title={button.title}
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={() => handleOpenModal(button.title, button.content)}
              />
            </motion.div>
          ))}
        </div>
        {/* row 2 */}
        <div className="my-6 flex">
          {buttonsData.slice(2, 5).map((button, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, randomScale(), 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="mx-6"
            >
              <Button2
                title={button.title}
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-logo"
                hoverBG="brand-green-dark"
                onClick={() => handleOpenModal(button.title, button.content)}
              />
            </motion.div>
          ))}
        </div>
        {/* main row */}
        <div className="my-6 flex w-full items-center justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="mx-32"
          >
            <Button2
              title="Social Media Captions"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Social Media Captions", "Content for Social Media Captions")}
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <Reveal>
              <div>
                <h3 className="text-brand-cream text-[64px] leading-none lg:text-[98px]">
                  Create
                </h3>
                <h3 className="text-brand-cream text-[32px] leading-none lg:text-[48px]">
                  with <span className="text-brand-logo text-center">sloane.</span>
                </h3>
              </div>
            </Reveal>
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="mx-32"
          >
            <Button2
              title="Email Marketing"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Email Marketing", "Content for Email Marketing")}
            />
          </motion.div>
        </div>
        {/* row 4 */}
        <div className="my-6 flex w-full justify-center">
          {buttonsData.slice(9, 11).map((button, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, randomScale(), 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="mx-24"
            >
              <Button2
                title={button.title}
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={() => handleOpenModal(button.title, button.content)}
              />
            </motion.div>
          ))}
        </div>
        {/* row 5 */}
        <div className="my-6 flex">
          {buttonsData.slice(11, 14).map((button, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, randomScale(), 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="mx-6"
            >
              <Button2
                title={button.title}
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={() => handleOpenModal(button.title, button.content)}
              />
            </motion.div>
          ))}
        </div>
        {/* row 6 */}
        <div className="my-6 flex w-full justify-center">
          {buttonsData.slice(14).map((button, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: [1, randomScale(), 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="mx-24"
            >
              <Button2
                title={button.title}
                textColor="brand-green-dark"
                textHoverColor="brand-logo"
                backgroundColor="brand-cream"
                hoverBG="brand-green-dark"
                onClick={() => handleOpenModal(button.title, button.content)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-32">
          <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
          <p>{modalContent.content}</p>
          <button onClick={handleCloseModal} className="mt-4 bg-brand-green text-brand-cream py-2 px-4 rounded-full hover:bg-brand-green-dark transition duration-300">
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Floating;
