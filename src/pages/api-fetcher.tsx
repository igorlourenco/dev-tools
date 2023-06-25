import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const ApiFetcherPage = () => {
  const { colorMode } = useColorMode();
  const [apiToFetch, setApiToFetch] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<object>({});
  const [jsonStringHasError, setJsonStringHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        apiToFetch.replaceAll("'", '"').replaceAll(" ", "").replaceAll('"', "")
      );
      const json = await response.json();
      const url = response.url;
      const status = response.status;
      const statusText = response.statusText;
      const headers = response.headers;
      const ok = response.ok;
      const redirected = response.redirected;
      const type = response.type;
      const body = response.body;
      const bodyUsed = response.bodyUsed;

      setResponse({
        data: json,
        url: url,
        status: status,
        statusText: statusText,
        headers: headers,
        ok: ok,
        redirected: redirected,
        type: type,
        body: body,
        bodyUsed: bodyUsed,
      });
    };

    if (apiToFetch) fetchApi();
  }, [apiToFetch]);

  return (
    <Layout>
      <Heading textAlign="center" as="h1" size="lg" fontWeight="bold">
        Api Fetcher
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
          <Input
            placeholder="API URL"
            value={apiToFetch}
            onChange={(e) =>
              setApiToFetch(
                e.target.value
                  .replaceAll("'", '"')
                  .replaceAll(" ", "")
                  .replaceAll('"', "")
              )
            }
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
            displayDataTypes={false}
            style={{
              height: "100%",
            }}
            name={null}
            theme={colorMode === "light" ? "rjv-default" : "twilight"}
            src={response}
          />
          {jsonStringHasError && <Text>Invalid JSON object</Text>}
        </Box>
      </Flex>
    </Layout>
  );
};

export default ApiFetcherPage;
