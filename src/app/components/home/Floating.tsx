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
    { title: "Your go-to for all how-to's", content: 'Sloane provides step-by-step guidance for every aspect of your business. From tackling tough client situations to implementing new strategies, you’ll have expert advice at your fingertips. Say goodbye to second-guessing.' },
    { title: 'Product Ideation', content: 'Generate innovative product ideas tailored to your brand and market needs. Sloane helps you brainstorm, refine, and develop new offerings effortlessly. Stay ahead of the competition with fresh, creative concepts tailored specifically for you.' },
    { title: 'Business Planning', content: 'Develop comprehensive business plans with ease. Sloane helps you outline goals, strategies, and action items, ensuring a clear path to success. Spend less time planning and more time growing.' },
    { title: 'Client Communications', content: 'Handle all client interactions with professionalism and ease. Sloane crafts emails, messages, and responses tailored to your brand’s tone. Ensure clear, effective, and personable communication every time and resolve any sticky situations with ease.' },
    { title: 'Marketing Strategies', content: 'Sloane crafts tailored marketing strategies that align perfectly with your brand and goals. From campaign planning to execution, you’ll get actionable insights to boost your reach and engagement. Elevate your marketing efforts effortlessly and see tangible results.' },
    { title: 'Blog Ideas', content: 'Sloane crafts compelling blog content that resonates with your audience and boosts engagement. No more brainstorming or writing—just publish and watch your readership grow. Let Sloane handle the creation, so you can focus on what\'s important to you.' },
    { title: 'SEO', content: 'Enhance your online presence with targeted SEO strategies. Sloane optimises your content, ensuring better search engine rankings and increased visibility. Drive more organic traffic to your site seamlessly.' },
    { title: 'Social Media Reels', content: 'Tap into Sloane’s expertise to create viral social media reels with proven strategies. Benefit from hooks, scripts, and templates that leverage the latest algorithm insights for maximum engagement. Let Sloane guide you step-by-step to ensure every reel captures attention and drives your brand’s growth.' },
    { title: 'Email Marketing', content: 'Enhance your email campaigns with personalised, high-converting copy. Sloane crafts engaging content tailored to your audience, ensuring each message resonates deeply. Achieve higher open rates and conversions effortlessly.' },
    { title: 'Training & Onboarding', content: 'Simplify the onboarding process with structured training materials and plans. Sloane creates comprehensive guides and schedules so new team members ramp up quickly. Promote a smooth and efficient integration into your business.' },
    { title: 'Website Copy', content: 'Create compelling website content that captures your brand’s essence. Sloane crafts engaging, clear, and persuasive copy that truly speaks to your audience. Plus, benefit from Sloane\'s guidance with proven templates to convert visitors into loyal customers effortlessly.' },
    { title: 'Sales Funnels', content: 'Optimize your sales process from start to finish. Sloane designs tailored sales funnels that convert leads into loyal customers. Streamline your sales strategy and boost revenue effortlessly.' },
    { title: 'Efficient Workflows', content: 'Streamline your business tasks with guidance from the Sloane chatbot, acting as your personal mentor. Receive step-by-step assistance to achieve your desired outcomes efficiently. Let Sloane transform workflow, making business operations smoother and more enjoyable.' },
    { title: 'Social Media Strategy', content: 'Enhance your social media game with a clear, effective strategy. Sloane provides tailored content plans, engagement tactics, and posting schedules. Grow your online presence and community with ease.' },
    { title: 'New Offerings', content: 'Develop and launch new services or products seamlessly. Sloane assists with everything from ideation to implementation, ensuring alignment with your brand and audience demands. Innovate without the stress.' },
    { title: 'Course Creation', content: 'Bring educational products to life quickly and effectively. Sloane helps you design, structure, and market your courses, tailored to your audience\'s needs. Deliver valuable content and grow your expertise with ease.' },
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
              title="Social Media Reels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() => handleOpenModal("Social Media Reels", "Tap into Sloane’s expertise to create viral social media reels with proven strategies. Benefit from hooks, scripts, and templates that leverage the latest algorithm insights for maximum engagement. Let Sloane guide you step-by-step to ensure every reel captures attention and drives your brand’s growth.")}
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
              onClick={() => handleOpenModal("Email Marketing", "Enhance your email campaigns with personalised, high-converting copy. Sloane crafts engaging content tailored to your audience, ensuring each message resonates deeply. Achieve higher open rates and conversions effortlessly.")}
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
        <div className="bg-brand-cream p-8 rounded-2xl shadow-lg max-w-md mx-auto mt-32">
          <h2 className="text-2xl font-bold mb-4 text-brand-green">{modalContent.title}</h2>
          <p>{modalContent.content}</p>
          <button onClick={handleCloseModal} className="mt-4 hover:bg-brand-green text-brand-green border-2 border-brand-green py-2 px-4 rounded-full transition duration-300 hover:text-brand-cream font-Archivo">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Floating;
