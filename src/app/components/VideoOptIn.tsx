'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoOptIn() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);

          // Get the iframe's contentWindow
          const iframe = videoRef.current;
          if (iframe) {
            const player = iframe.contentWindow;

            if (entry.isIntersecting) {
              // When entering view, reload the iframe to restart the video
              iframe.src = iframe.src;
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Updated animation variants

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, type: 'spring' },
    },
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setStatus('idle');
    setShowForm(false); // Reset back to initial button state
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form submitted - starting process');

    try {
      // First, send email via your API
      const emailResponse = await fetch('/api/video-opt-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const emailData = await emailResponse.json();
      console.log('Email API response:', emailData);

      if (emailResponse.ok) {
        // If email sent successfully, trigger Make.com webhook
        try {
          console.log('Triggering Make.com webhook');
          const webhookResponse = await fetch(
            'https://hook.us1.make.com/pnidciq9iv84l57qqwilbepmatyr3iga',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                timestamp: new Date().toISOString(),
                source: 'video_opt_in',
                action: 'form_submitted',
              }),
            }
          );

          if (webhookResponse.ok) {
            console.log('Webhook triggered successfully');
          } else {
            console.error(
              'Webhook trigger failed:',
              await webhookResponse.text()
            );
          }
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
        }

        setStatus('success');
        // Show success message for 3 seconds, then reset form
        setTimeout(() => {
          resetForm();
        }, 18000);
      } else {
        console.error('Email API error:', emailData);
        setStatus('error');
        setLoading(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setLoading(false);
    } finally {
      console.log('Form submission process completed');
    }
  };

  const SuccessModal = () => (
    <AnimatePresence>
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={resetForm}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-[101] rounded-2xl bg-brand-cream p-6 shadow-2xl md:p-8"
          >
            <div className="max-w-sm text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2, bounce: 0.6 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10"
              >
                <span className="text-4xl">✨</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 font-Archivo text-2xl font-bold text-brand-green"
              >
                Yay! You're Almost There! 🎉
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 text-lg text-brand-green-dark/80"
              >
                We've just sent your video access to{' '}
                <span className="font-semibold text-brand-green-dark">
                  {email}
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-brand-green-dark/70"
              >
                Can't find it? Check your spam folder for an email from{' '}
                <span className="font-medium text-brand-green">
                  hello@sloane.biz
                </span>{' '}
                📧
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={resetForm}
                className="mt-6 rounded-full bg-brand-green px-6 py-2 text-sm font-medium text-white 
                transition-all hover:bg-brand-green-dark"
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center lg:min-h-[600px] lg:flex-row">
      {/* Background Video */}
      <div className="absolute inset-0 -top-[100px] z-0 h-full w-full md:top-0">
        <iframe
          src="https://player.vimeo.com/video/1051734656?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="h-[100vh] w-full lg:h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '115%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-[450px] left-0 right-0 flex justify-center md:-bottom-52 lg:left-auto lg:right-auto">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileTap="tap"
            onClick={() => setShowForm(true)}
            className="rounded-xl bg-brand-green px-8 py-4 font-Black text-lg uppercase text-brand-logo shadow-md lg:px-24 lg:text-xl"
          >
            <span className="hidden lg:inline">Get Your Free Sloane Demo</span>
            <span className="lg:hidden">FREE SLOANE DEMO</span>
          </motion.button>
        </div>
      </div>

      {/* New Modal */}
      <AnimatePresence>
        {showForm && (
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
              onClick={() => !loading && setShowForm(false)}
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
                onClick={() => !loading && setShowForm(false)}
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
                  Get Your Free Demo
                </h3>
                <p className="mt-1 text-brand-cream">
                  Experience the power of Sloane firsthand
                </p>
              </div>

              {/* Form Section */}
              <div className="px-6 py-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-brand-green-dark focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-brand-green-dark focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-brand-green py-4 text-lg font-semibold text-white transition-all hover:bg-brand-green-dark disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Get Access Now'
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-center text-red-500">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessModal />
    </div>
  );
}
