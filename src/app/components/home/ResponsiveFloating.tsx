"use client";
import { useState, useEffect } from "react";
import Floating from "./Floating";
import MobileFloating from "./MobileFloating";

const ResponsiveFloating = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileFloating /> : <Floating />;
};

export default ResponsiveFloating;
