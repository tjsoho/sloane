'use client';

import { useState, useEffect } from 'react';
import VideoModal from './VideoModal';
import VideoOptIn from '../components/VideoOptIn';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  vimeoUrl: string;
  isFirst?: boolean;
  slug: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'First Time Seeing Sloane',
    description:
      'Take a peak behind the curtain and see what Sloane is like for the first time.',
    thumbnail: '/images/s-tour.png', // You'll need to add these images
    vimeoUrl: 'https://player.vimeo.com/video/1050251753', // Just the base URL
    isFirst: true,
    slug: 'tour',
  },
  {
    id: '2',
    title: 'Marketing',
    description: 'Learn how Sloane can help market your property effectively.',
    thumbnail: '/images/s-marketing.png', // Add this image to your public folder
    vimeoUrl: 'https://player.vimeo.com/video/1050251823',
    slug: 'marketing',
  },
  {
    id: '3',
    title: 'Support',
    description:
      'Discover the comprehensive support system Sloane provides for your property management needs.',
    thumbnail: '/images/s-support.png', // Add this image to your public folder
    vimeoUrl: 'https://player.vimeo.com/video/1050251891',
    slug: 'support',
  },
  {
    id: '4',
    title: 'Getting the Best From Sloane',
    description:
      'Learn how to maximize your experience and efficiency using the Sloane platform.',
    thumbnail: '/images/s-response.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251769',
    slug: 'getting-the-best-from-sloane',
    },
  {
    id: '5',
    title: 'How to Update Your Business',
    description:
      'A step-by-step guide on keeping your business information current on Sloane.',
    thumbnail: '/images/s-update.png',
    vimeoUrl: 'https://player.vimeo.com/video/1050251798',
    slug: 'update-your-business',
  },
  // Add more videos here
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPulsing, setIsPulsing] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const getVideoSlug = (title: string) => {
    // Special case for the first video
    if (title === 'First Time Seeing Sloane') {
      return 'tour';
    }

    // For other videos, keep the existing slug generation
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="h-full w-full bg-brand-cream">
      {/* Hero Banner */}
      <div className="relative h-[66vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/centerHome.png"
            alt="Videos Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center">
          <h1 className="font-Archivo text-6xl font-bold text-white lg:text-8xl">
            Videos
          </h1>
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative flex cursor-pointer flex-col rounded-md border border-white bg-white shadow-md 
                transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push(`/videos/${video.slug}`)}
            >
              {video.isFirst && (
                <div
                  className={`absolute -left-4 -top-4 z-10 rounded-md bg-white px-4 py-2 text-sm
                  font-bold text-brand-green shadow-lg transition-transform
                  ${isPulsing ? 'animate-gentle-pulse' : ''}`}
                >
                  Watch First! 🎥
                </div>
              )}
              <div className="aspect-video w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold text-brand-green">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          video={selectedVideo}
        />
      </div>
    </div>
  );
}
