'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../Animations/Reveal';
import Button2 from '../Button2';
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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

  const buttonsData = [
    {
      title: "Your go-to for all how-to's",
      content:
        'Sloane provides step-by-step guidance for every aspect of your business. <br></br> From tackling tough client situations to implementing new strategies, you’ll have expert advice at your fingertips. <br></br>Say goodbye to second-guessing.',
    },
    {
      title: 'Product Ideation',
      content:
        'Generate innovative product ideas tailored to your brand and market needs.<br></br> Sloane helps you brainstorm, refine, and develop new offerings effortlessly.<br></br>Stay ahead of the competition with fresh, creative concepts tailored specifically for you.',
    },
    {
      title: 'Business Planning',
      content:
        'Develop comprehensive business plans with ease. <br></br>Sloane helps you outline goals, strategies, and action items, ensuring a clear path to success. <br></br>Spend less time planning and more time growing.',
    },
    {
      title: 'Client Communications',
      content:
        'Handle all client interactions with professionalism and ease. <br></br>Sloane crafts emails, messages, and responses tailored to your brand’s tone. <br></br>Ensure clear, effective, and personable communication every time and resolve any sticky situations with ease.',
    },
    {
      title: 'Marketing Strategies',
      content:
        'Sloane crafts tailored marketing strategies that align perfectly with your brand and goals. <br></br>From campaign planning to execution, you’ll get actionable insights to boost your reach and engagement.<br></br> Elevate your marketing efforts effortlessly and see tangible results.',
    },
    {
      title: 'Blog Ideas',
      content:
        "Sloane crafts compelling blog content that resonates with your audience and boosts engagement. <br></br>No more brainstorming or writing—just publish and watch your readership grow. <br></br>Let Sloane handle the creation, so you can focus on what's important to you.",
    },
    {
      title: 'SEO',
      content:
        'Enhance your online presence with targeted SEO strategies.<br></br> Sloane optimises your content, ensuring better search engine rankings and increased visibility.<br></br> Drive more organic traffic to your site seamlessly.',
    },
    {
      title: 'Social Media Reels',
      content:
        'Tap into Sloane’s expertise to create viral social media reels with proven strategies.<br></br> Benefit from hooks, scripts, and templates that leverage the latest algorithm insights for maximum engagement. <br></br>Let Sloane guide you step-by-step to ensure every reel captures attention and drives your brand’s growth.',
    },
    {
      title: 'Email Marketing',
      content:
        'Enhance your email campaigns with personalised, high-converting copy. <br></br>Sloane crafts engaging content tailored to your audience, ensuring each message resonates deeply. <br></br>Achieve higher open rates and conversions effortlessly.',
    },
    {
      title: 'Training & Onboarding',
      content:
        'Simplify the onboarding process with structured training materials and plans. <br></br>Sloane creates comprehensive guides and schedules so new team members ramp up quickly. <br></br>Promote a smooth and efficient integration into your business.',
    },
    {
      title: 'Website Copy',
      content:
        "Create compelling website content that captures your brand’s essence. Sloane crafts engaging, clear, and persuasive copy that truly speaks to your audience. Plus, benefit from Sloane's guidance with proven templates to convert visitors into loyal customers effortlessly.",
    },
    {
      title: 'Sales Funnels',
      content:
        'Optimize your sales process from start to finish.<br></br> Sloane designs tailored sales funnels that convert leads into loyal customers. <br></br>Streamline your sales strategy and boost revenue effortlessly.',
    },
    {
      title: 'Efficient Workflows',
      content:
        'Streamline your business tasks with guidance from the Sloane chatbot, acting as your personal mentor.<br></br> Receive step-by-step assistance to achieve your desired outcomes efficiently.<br></br> Let Sloane transform workflow, making business operations smoother and more enjoyable.',
    },
    {
      title: 'Social Media Strategy',
      content:
        'Enhance your social media game with a clear, effective strategy.<br></br> Sloane provides tailored content plans, engagement tactics, and posting schedules.<br></br> Grow your online presence and community with ease.',
    },
    {
      title: 'New Offerings',
      content:
        'Develop and launch new services or products seamlessly. <br></br>Sloane assists with everything from ideation to implementation, ensuring alignment with your brand and audience demands. <br></br>Innovate without the stress.',
    },
    {
      title: 'Course Creation',
      content:
        "Bring educational products to life quickly and effectively. <br></br>Sloane helps you design, structure, and market your courses, tailored to your audience's needs.<br></br> Deliver valuable content and grow your expertise with ease.",
    },
  ];

  return (
    <div className="flex h-full w-full bg-brand-green py-8 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
        {/* ---------------------------------------------------------row 1 ---------------------------------------------------------*/}
        <div className="my-6 flex w-full justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-2 font-Quicksand"
          >
            <Button2
              title="Your go-to for all how-to's"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[0]?.title) || '',
                  (buttonsData && buttonsData[0]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 2 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Product Ideation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[1]?.title) || '',
                  (buttonsData && buttonsData[1]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Blog Ideas"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[5]?.title) || '',
                  (buttonsData && buttonsData[5]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 3 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-2 font-Quicksand"
          >
            <Button2
              title="SEO"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[6]?.title) || '',
                  (buttonsData && buttonsData[6]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Business Planning"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[2]?.title) || '',
                  (buttonsData && buttonsData[2]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 4 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-2 font-Quicksand"
          >
            <Button2
              title="Social Media Reels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[7]?.title) || '',
                  (buttonsData && buttonsData[7]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[11]?.title) || '',
                  (buttonsData && buttonsData[11]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ------------------------------------------------ MAIN ROW ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center"></div>
        {/* ----------------------------- main row ----------------------------- */}
        <div className="my-8 flex w-full items-center justify-center">
          <Reveal>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[64px] leading-none text-brand-logo lg:text-[98px]">
                sloane
              </h3>
              <h3 className="text-[32px] leading-none text-brand-cream lg:text-[48px]">
            helps you with
              </h3>
            </div>
          </Reveal>
        </div>
        {/* row 4 */}
        <div className="my-4 flex w-full justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Client Communication"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[3]?.title) || '',
                  (buttonsData && buttonsData[3]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 5 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-4 font-Quicksand"
          >
            <Button2
              title="Training & Onboarding"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[9]?.title) || '',
                  (buttonsData && buttonsData[9]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-4 font-Quicksand"
          >
            <Button2
              title="Website Copy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[10]?.title) || '',
                  (buttonsData && buttonsData[10]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 6 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-2 font-Quicksand"
          >
            <Button2
              title="Sales Funnels"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[11]?.title) || '',
                  (buttonsData && buttonsData[11]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, randomScale(), 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 font-Quicksand"
          >
            <Button2
              title="Socials Strategy"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-logo"
              hoverBG="brand-green"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[13]?.title) || '',
                  (buttonsData && buttonsData[13]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------row 7 ---------------------------------------------------------*/}
        <div className="my-2 flex w-full justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-6 mt-4 font-Quicksand"
          >
            <Button2
              title="New Offerings"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-green-light"
              hoverBG="brand-green-dark"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[14]?.title) || '',
                  (buttonsData && buttonsData[14]?.content) || ''
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, randomScale(), 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="mx-8 mt-2 font-Quicksand"
          >
            <Button2
              title="Course Creation"
              textColor="brand-green-dark"
              textHoverColor="brand-logo"
              backgroundColor="brand-cream"
              hoverBG="brand-green"
              onClick={() =>
                handleOpenModal(
                  (buttonsData && buttonsData[15]?.title) || '',
                  (buttonsData && buttonsData[15]?.content) || ''
                )
              }
            />
          </motion.div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleCloseModal} className="p-4 border-brand-green border-2">
        <div className="mx-auto mt-16 max-w-md rounded-2xl bg-brand-cream p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-brand-green">
            {modalContent.title}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: modalContent.content }}></p>
          <button
            onClick={handleCloseModal}
            className="mt-4 rounded-full border-2 border-brand-green px-4 py-2 font-Archivo text-brand-green transition duration-300 hover:bg-brand-green hover:text-brand-cream"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MobileFloating;
