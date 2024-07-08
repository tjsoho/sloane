import { useState } from "react";
import { getTailwindColor } from "../../utils/tailwindColors";

interface Button2Props {
  title: string;
  textColor: string;
  textHoverColor: string;
  backgroundColor: string;
  hoverBG: string;
  onClick: () => void;
  path?: string;
}

const Button2: React.FC<Button2Props> = ({
  title,
  textColor,
  textHoverColor,
  backgroundColor,
  hoverBG,
  onClick,
  path,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? getTailwindColor(hoverBG) : getTailwindColor(backgroundColor),
    color: isHovered ? getTailwindColor(textHoverColor) : getTailwindColor(textColor),
  };

  return (
    <div
      onClick={() => window.open(path, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      className="px-2 lg:px-4 py-2 rounded-full cursor-pointer font-medium text-center"
    >
      {title}
    </div>
  );
};

export default Button2;
