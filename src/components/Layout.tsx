import { Box, BoxProps, Flex, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = ({ children, ...props }: BoxProps) => {
  return (
    <Box width="100%" maxWidth="100vw" {...props}>
      <Flex direction="column" maxWidth="100vw">
        <Flex py={4} px={16}>
          <ColorModeSwitcher />
        </Flex>
        <Stack p={16} spacing={4}>
          {children}
        </Stack>
      </Flex>
    </Box>
  );
};
