import {
  Box,
  Flex,
  Heading,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { isJson } from "../utils/isJson";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const JsonViewer = () => {
  const { colorMode } = useColorMode();
  const [jsonToParse, setJsonToParse] = useState<object>({});
  const [jsonStringHasError, setJsonStringHasError] = useState<boolean>(false);

  return (
    <Layout>
      <Heading textAlign="center" as="h1" size="lg" fontWeight="bold">
        JSON Viewer
      </Heading>
      <Flex minHeight="90vh" gap={1}>
        <Box
          w="50%"
          flex={1}
          borderColor={
            !jsonStringHasError
              ? colorMode === "dark"
                ? "gray.700"
                : "gray.300"
              : "red.300"
          }
          borderWidth="1px"
          borderStyle="solid"
        >
          <Textarea
            border="none"
            height="100%"
            onChange={(e) => {
              if (e.target.value === "") {
                setJsonToParse({});
                setJsonStringHasError(false);
                return;
              }

              if (isJson(e.target.value.replaceAll("'", '"'))) {
                setJsonToParse(JSON.parse(e.target.value.replaceAll("'", '"')));
                setJsonStringHasError(false);
                return;
              }

              setJsonToParse({});
              setJsonStringHasError(true);
              return;
            }}
            _focus={{
              outline: "none !important",
              boxShadow: "none",
            }}
          />
        </Box>
        <Box
          w="50%"
          flex={1}
          borderColor={colorMode === "dark" ? "gray.700" : "gray.300"}
          borderWidth="1px"
          borderStyle="solid"
        >
          <ReactJson
            style={{
              height: "100%",
            }}
            name={null}
            theme={colorMode === "light" ? "rjv-default" : "twilight"}
            src={jsonToParse}
          />
          {jsonStringHasError && <Text>Invalid JSON object</Text>}
        </Box>
      </Flex>
    </Layout>
  );
};

export default JsonViewer;
