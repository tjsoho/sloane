// src/hooks/useRandomMovement.ts
import { useState, useEffect } from "react";

const useRandomMovement = (maxPixels: number) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const move = () => {
      setPosition((prev) => {
        let newX = prev.x + direction.x * Math.random() * 0.5;
        let newY = prev.y + direction.y * Math.random() * 0.5;

        if (newX > maxPixels || newX < -maxPixels) {
          setDirection((prev) => ({ ...prev, x: -prev.x }));
          newX = Math.max(Math.min(newX, maxPixels), -maxPixels);
        }

        if (newY > maxPixels || newY < -maxPixels) {
          setDirection((prev) => ({ ...prev, y: -prev.y }));
          newY = Math.max(Math.min(newY, maxPixels), -maxPixels);
        }

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(move, 16); // Update at 60fps
    return () => clearInterval(interval);
  }, [direction, maxPixels]);

  return position;
};

export default useRandomMovement;
