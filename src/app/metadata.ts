import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sloane',
    description: 'Work Smart. Live Well.',
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: 'Sloane - Work Smart. Live Well.',
      description: 'The AI tool that helps business owners grow and while living well and staying in touch with their true selves.',
      url: 'https://sloane.biz',
      siteName: 'Sloane',
      images: [
        {
          url: 'https://sloane.biz/_next/image/?url=%2Fimages%2FheroMOck.png&w=828&q=75', // This should be your main preview image
          width: 1200,
          height: 630,
          alt: 'Sloane Webapp',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sloane - Making Business Easy',
      description: 'The AI tool that helps business owners grow and thrive',
      images: ['https://sloane.biz/images/og-image.png'],
    },
  };
  