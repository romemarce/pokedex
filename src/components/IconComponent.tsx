import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
    icon: IconDefinition;
    size?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "4x" | "5x";
    color?: string;
  }
  
  const IconComponent: React.FC<IconProps> = ({ icon, size, color }) => {
    return <FontAwesomeIcon icon={icon} size={size} style={{ color }} />;
  };

  export default IconComponent