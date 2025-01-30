'use client';
import { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrls: {
    mobile?: string;
    desktop: string;
  };
  poster?: string;
  height?: string;
  objectPosition?: string;
}

const VideoBackground = ({ 
  videoUrls, 
  poster,
  height = "100vh",
  objectPosition = "center"
}: VideoBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoUrl = isMobile && videoUrls.mobile ? videoUrls.mobile : videoUrls.desktop;

  return (
    <div className="relative w-full" style={{ height }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground; 