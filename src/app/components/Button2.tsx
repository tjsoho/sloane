import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { getTailwindColor } from "../../utils/tailwindColors";

interface Button2Props {
  title: string;
  textColor: string;
  textHoverColor: string;
  backgroundColor: string;
  hoverBG: string;
  onClick: () => void;
  path: string;
  position: { x: number; y: number };
  animate?: boolean; // New prop to control animation
}

const Button2: React.FC<Button2Props> = ({
  title,
  textColor,
  textHoverColor,
  backgroundColor,
  hoverBG,
  onClick,
  path,
  position,
  animate, // New prop to control animation
}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (animate) {
      controls.start({
        x: [position.x, position.x + (Math.random() - 0.5) * 10],
        y: [position.y, position.y + (Math.random() - 0.5) * 10],
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
      });
    }
  }, [position, controls, animate]);

  const buttonStyle = {
    backgroundColor: isHovered ? getTailwindColor(hoverBG) : getTailwindColor(backgroundColor),
    color: isHovered ? getTailwindColor(textHoverColor) : getTailwindColor(textColor),
  };

  return (
    <motion.div
      onClick={() => window.open(path, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      className="px-2 lg:px-4 py-2 rounded-full cursor-pointer font-medium text-center"
      animate={animate ? controls : undefined} // Conditional animation
    >
      {title}
    </motion.div>
  );
};

export default Button2;