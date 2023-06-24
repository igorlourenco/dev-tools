import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = ({ children, ...props }: BoxProps) => {
  return (
    <Box width="100vw" {...props}>
      <Flex direction="column">
        <Flex p={4}>
          <ColorModeSwitcher />
        </Flex>
        <Box p={16}>{children}</Box>
      </Flex>
    </Box>
  );
};
