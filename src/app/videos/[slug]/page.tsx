'use client';

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface VideoPageProps {
  params: { slug: string };
}

const videos = {
  tour: {
    title: 'First Time Seeing Sloane',
    description:
      'Take a peak behind the curtain and see what Sloane is like for the first time.',
    thumbnail: '/images/s-tour.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251753',
  },
  marketing: {
    title: 'Marketing',
    description: 'Learn how Sloane can help market your property effectively.',
    thumbnail: '/images/s-marketing.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251823',
  },
  support: {
    title: 'Support',
    description:
      'Discover the comprehensive support system Sloane provides for your property management needs.',
    thumbnail: '/images/s-support.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251891',
  },
  'getting-the-best-from-sloane': {
    title: 'Getting the Best From Sloane',
    description:
      'Learn how to maximize your experience and efficiency using the Sloane platform.',
    thumbnail: '/images/s-response.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251769',
  },
  'update-your-business': {
    title: 'How to Update Your Business',
    description:
      'A step-by-step guide on keeping your business information current on Sloane.',
    thumbnail: '/images/s-update.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251798',
  },
};

export default function VideoPage({ params }: VideoPageProps) {
  const router = useRouter();
  const video = videos[params.slug as keyof typeof videos];
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) {
    router.push('/videos');
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-brand-cream">
      <div className="mx-auto w-full max-w-[1000px] px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <h1 className="mb-8 text-center font-Archivo text-4xl font-bold text-brand-green lg:text-5xl">
            {video.title}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8 w-full overflow-hidden rounded-md shadow-xl"
          >
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute h-full w-full object-cover"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 hover:bg-black/30">
                      <div className="transform transition-transform duration-300 hover:scale-110">
                        <svg
                          width="96"
                          height="96"
                          viewBox="0 0 96 96"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="drop-shadow-lg"
                        >
                          {/* Circle */}
                          <circle
                            cx="48"
                            cy="48"
                            r="46"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                          {/* Play Triangle */}
                          <path
                            d="M65 48L38 64L38 32L65 48Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Video iframe - only rendered when playing */}
              {isPlaying && (
                <iframe
                  src={`${video.vimeoUrl}?autoplay=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 'none' }}
                />
              )}
            </div>
          </motion.div>

          <button
            onClick={() => router.push('/videos')}
            className="rounded-md bg-brand-green px-8 py-3 font-Archivo text-lg uppercase text-brand-cream 
              shadow-lg transition-all duration-300 hover:bg-brand-green-dark hover:text-brand-logo hover:shadow-xl"
          >
            Watch More Videos
          </button>
        </motion.div>
      </div>
    </div>
  );
}
