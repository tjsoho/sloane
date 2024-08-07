'use client';
import React, { useState } from 'react';
import { Grid, Typography, Modal, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; // Corrected import
import { Reveal } from '../components/Animations/Reveal';
import { SlideReveal } from '../components/Animations/SlideReveal';
import Button from '../components/Button';

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
      // Handle successful form submission here
      console.log('Form submitted successfully!');
      setIsSubmitted(true);
      form.reset();

      // Open the modal
      setModalOpen(true);
    } else {
      // Handle form submission errors here
      console.error('Form submission failed.');
    }
  };

  const inputClass =
    'my-4 block w-full py-2 px-4 border border-brand-logo rounded-full bg-transparent text-brand-green-dark placeholder-green-700 focus:border-brand-green-dark outline-none';

  const inputClass2 =
    'my-4 block w-full px-4 py-3 border border-brand-logo rounded-[40px] bg-transparent text-brand-green-dark placeholder-green-700 overflow-hidden focus:border-brand-green-dark outline-none';

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
            textColor="brand-green-dark"
            textHoverColor="brand-logo"
            backgroundColor="brand-green-light"
            hoverBG="brand-green-dark"
            ariaLabel='Send Message'
          />
        </form>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box className="fixed inset-0 flex items-center justify-center bg-brand-cream bg-opacity-50">
            <div className="mx-auto max-w-sm rounded-lg bg-brand-cream p-12">
              <h2 className="mb-4 text-center font-Archivo text-2xl text-brand-green">
                SUCCESS
              </h2>
              <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                className="text-left text-brand-green-dark"
              >
                Thanks for your message!
              </Typography>
              <Typography
                id="modal-title"
                variant="h6"
                sx={{ mt: 1 }}
                className="text-left text-brand-green-dark"
              >
                We&apos;ll be in touch shortly.
              </Typography>
              <button
                onClick={() => {
                  setModalOpen(false);
                  router.push('/home');
                }}
                className="mt-4 rounded-full bg-brand-green px-8 py-2 text-brand-cream hover:bg-brand-green-dark hover:text-brand-logo"
              >
                Close
              </button>
            </div>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
