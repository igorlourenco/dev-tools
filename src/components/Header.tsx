import { Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Header = () => {
  return (
    <Flex py={4} px={16} justifyContent="space-between" alignItems="centers">
      <Heading>JSON</Heading>
      <ColorModeSwitcher />
    </Flex>
  );
};
