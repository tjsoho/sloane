import { getTailwindColor } from "../../../utils/tailwindColors";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

interface SecretCardProps {
  title: string;
  para: string;
  cardBG: string;
  titleColor: string;
  paraColor: string;
}

const SecretCard: React.FC<SecretCardProps> = ({ title, para, cardBG, titleColor, paraColor }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        scale: isHovered ? 1.05 : 1,
        transition: { duration: 0.5 },
      });
    };

    startAnimation();
  }, [isHovered, controls]);

  const cardStyle = {
    backgroundColor: getTailwindColor(cardBG),
  };

  const titleStyle = {
    color: getTailwindColor(titleColor),
  };

  const paraStyle = {
    color: getTailwindColor(paraColor),
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
      className="w-full lg:w-80 h-[500px] px-6 py-6 rounded-[30px] flex flex-col items-start text-left"
      animate={controls}
    >
      <h3 style={titleStyle} className="text-3xl font-bold mb-6 leading-none">
        {title}
      </h3>
      <p style={paraStyle} className="text-left">
        {para}
      </p>
    </motion.div>
  );
};

export default SecretCard;
