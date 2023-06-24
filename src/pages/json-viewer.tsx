import { Box, Flex, Text, Textarea, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { useDebounce } from "../hooks/useDebounce";
import { isJson } from "../utils/isJson";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const JsonViewer = () => {
  const { colorMode } = useColorMode();
  const [stringfiedJson, setStringifiedJson] = useState<object>({});
  const debouncedValue = useDebounce<object>(stringfiedJson, 500);
  const [jsonStringHasError, setJsonStringHasError] = useState<boolean>(false);

  return (
    <Layout>
      <Flex minHeight="90vh" gap={1}>
        <Box
          w="50%"
          flex={1}
          borderColor="gray.300"
          borderWidth="1px"
          borderStyle="solid"
        >
          <Textarea
            border="none"
            height="100%"
            onChange={(e) => {
              if (isJson(e.target.value)) {
                setStringifiedJson(JSON.parse(e.target.value));
                setJsonStringHasError(false);
              } else {
                setJsonStringHasError(true);
              }
            }}
          />
        </Box>
        <Box
          w="50%"
          flex={1}
          borderColor="gray.300"
          borderWidth="1px"
          borderStyle="solid"
        >
          <ReactJson
            style={{
              height: "100%",
            }}
            name={null}
            theme={colorMode === "light" ? "rjv-default" : "twilight"}
            src={debouncedValue}
          />
          {jsonStringHasError && <Text>Invalid JSON object</Text>}
        </Box>
      </Flex>
    </Layout>
  );
};

export default JsonViewer;
