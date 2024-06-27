import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

const useRandomMovement = (maxPixels: number) => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<{ x: number; y: number }>({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });

  const move = async () => {
    await controls.start({
      x: [direction.x * (Math.random() * maxPixels), -direction.x * (Math.random() * maxPixels)],
      y: [direction.y * (Math.random() * maxPixels), -direction.y * (Math.random() * maxPixels)],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    });
    setDirection({
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
    });
  };

  useEffect(() => {
    move();
  }, [controls]);

  return controls;
};

export default useRandomMovement;
