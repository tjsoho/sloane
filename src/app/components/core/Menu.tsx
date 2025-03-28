'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Close } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const menuItems = [
    { title: 'About', href: '/about' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'FAQS', href: '/FAQS' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
    { title: 'Login', href: 'https://app.sloane.biz/dashboard' },
  ];

  const itemVariants = {
    closed: { x: -50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const linkVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const arrowVariants = {
    initial: {
      width: 0,
      opacity: 0,
    },
    hover: {
      width: '4rem',
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const arrowHeadVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-brand-green lg:w-1/3"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex min-h-screen flex-col px-6 w-full">
              {/* Navigation Links */}
              <nav className="mt-32 space-y-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <motion.div
                      className="group relative inline-flex items-center"
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        href={item.href}
                        className={`font-Poppins text-3xl font-thin transition-colors md:text-4xl ${pathname === item.href
                          ? 'text-brand-logo'
                          : 'text-brand-cream hover:text-brand-logo'
                          }`}
                        onClick={onClose}
                      >
                        {item.title}
                        {pathname === item.href && (
                          <motion.div
                            layoutId="underline"
                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-logo"
                          />
                        )}
                      </Link>
                      <div className="relative ml-4 flex items-center">
                        <motion.div
                          variants={arrowVariants}
                          className="h-[1px] self-center bg-brand-logo"
                        />
                        <motion.div
                          variants={arrowHeadVariants}
                          className="absolute right-0 translate-x-1/2 transform"
                        >
                          <div className="h-2 w-2 rotate-45 border-r border-t border-brand-logo" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </nav>

              {/* Social Connection Buttons */}
              <div className="mt-auto mb-8 flex flex-row items-center justify-center gap-6">
                <motion.a
                  href="mailto:hello@sloane.biz"
                  variants={itemVariants}
                  custom={menuItems.length + 1}
                  className="text-brand-cream hover:text-brand-logo transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  variants={itemVariants}
                  custom={menuItems.length + 2}
                  className="text-brand-cream hover:text-brand-logo transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  variants={itemVariants}
                  custom={menuItems.length + 3}
                  className="text-brand-cream hover:text-brand-logo transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                </motion.a>
              </div>

              {/* Mobile Buttons */}
              <div className="lg:hidden mb-16 flex flex-row items-center justify-center gap-4">
                <motion.div
                  variants={itemVariants}
                  custom={menuItems.length + 4}
                >
                  <Link
                    href="https://app.sloane.biz/dashboard"
                    className="inline-block rounded-full border border-brand-cream bg-brand-green px-6 py-2 font-Archivo text-sm uppercase text-brand-cream transition-colors hover:bg-brand-green-dark hover:text-brand-cream hover:shadow-lg"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={menuItems.length + 5}
                >
                  <Link
                    href="https://app.sloane.biz/userform"
                    className="inline-block rounded-full bg-brand-cream px-6 py-2 font-Archivo text-sm uppercase text-brand-green transition-colors hover:bg-brand-green-dark hover:text-brand-cream hover:shadow-lg"
                    onClick={onClose}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
