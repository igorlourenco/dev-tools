import { Link, Stack, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

interface ToolIconProps {
  icon: any;
  title: string;
  href: string;
}

export const ToolIcon = ({ icon, title, href }: ToolIconProps) => {
  const { colorMode } = useColorMode();
  return (
    <Link
      as={NextLink}
      href={href}
      textDecoration="none"
      _focus={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
    >
      <Stack
        p={6}
        alignItems="center"
        borderColor={colorMode === "dark" ? "gray.700" : "gray.300"}
        borderStyle="solid"
        borderWidth="1px"
        cursor="pointer"
        shadow="md"
        rounded="md"
      >
        {icon}
        <Text>{title}</Text>
      </Stack>
    </Link>
  );
};
