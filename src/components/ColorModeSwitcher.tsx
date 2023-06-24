import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle theme"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
  );
};
