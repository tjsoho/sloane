'use client';
import React, { useState } from 'react';
import { Grid, Typography, Modal, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; // Corrected import
import { Reveal } from '../components/Animations/Reveal';
import { SlideReveal } from '../components/Animations/SlideReveal';
import Button from '../components/Button';
import * as fbq from '../../utils/fpixel'; // Add this import
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Adjust URL if necessary
    let url = formData.get('url') as string;
    if (url && !/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
      formData.set('url', url);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Track successful form submission
      fbq.event('Lead', {
        content_name: 'Contact Form Submission',
        content_category: 'Contact',
        value: 1,
        currency: 'USD',
      });

      console.log('Form submitted successfully!');
      setIsSubmitted(true);
      form.reset();
      setModalOpen(true);
    } else {
      // Optionally track failed submissions
      fbq.event('Contact Form Error', {
        content_name: 'Contact Form Error',
        content_category: 'Contact',
      });

      console.error('Form submission failed.');
    }
  };

  const inputClass =
    'my-4 block w-full py-2 px-4 border border-brand-logo rounded-lg bg-transparent text-brand-green-dark placeholder-green-700 focus:border-brand-green-dark outline-none';

  const inputClass2 =
    'my-4 block w-full px-4 py-3 border border-brand-logo rounded-lg bg-transparent text-brand-green-dark placeholder-green-700 overflow-hidden focus:border-brand-green-dark outline-none';

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          paddingTop: 16,
          paddingBottom: 16,
        }}
        className="bg-brand-green"
      >
        <SlideReveal>
          <h2 className="my-4 text-center text-5xl text-brand-logo lg:text-7xl">
            Let&apos;s Chat
          </h2>
        </SlideReveal>
        <Reveal>
          <Typography
            variant="h5"
            style={{ textAlign: 'center', fontSize: '20px' }}
            className="px-16 text-brand-cream xl:px-32"
            gutterBottom
          >
            Feel free to share your thoughts or questions with us and we&apos;ll
            get back to you within 48hrs.
          </Typography>
        </Reveal>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: { xs: '20px', sm: '0 20px', lg: '0 40px', xl: '0 60px' },
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          alignItems: 'center',
        }}
        className="bg-brand-green"
      >
        <form onSubmit={handleSubmit} className="w-full max-w-[700px]">
          <input
            type="hidden"
            name="access_key"
            value="a8bc9187-f073-45fe-b457-d7848a0e31f0" // Replace with your actual Access Key
          />
          <h3 className="text-center font-Archivo text-3xl text-brand-logo lg:text-5xl">
            Contact Form
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="business"
            placeholder="Business Name*"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="url"
            placeholder="Business URL*"
            required
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            rows={5}
            required
            className={inputClass2}
          />
          <div style={{ display: 'none' }}>
            <input type="checkbox" name="botcheck" />
          </div>
          <Button
            title="Send Message"
            textColor="brand-green"
            textHoverColor="brand-logo"
            backgroundColor="brand-logo"
            hoverBG="brand-green-dark"
            ariaLabel="Send Message"
          />
        </form>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/30 bg-brand-green-dark/70 shadow-2xl backdrop-blur-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full p-2 text-brand-logo transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="bg-brand-green px-6 py-8 text-center">
                <h3 className="font-Archivo text-3xl text-brand-cream">
                  SUCCESS
                </h3>
                <p className="mt-1 text-brand-cream">
                  Thanks for your message!
                </p>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-8 text-brand-cream">
                <p className="text-center">We'll be in touch shortly.</p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      router.push('/home');
                    }}
                    className="rounded-lg bg-brand-logo px-8 py-3 font-Archivo uppercase text-brand-green transition-all hover:bg-brand-green hover:text-brand-logo"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
