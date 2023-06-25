import { Grid, GridItem } from "@chakra-ui/react";
import { LuFileJson2 } from "react-icons/lu";
import { TbApi } from "react-icons/tb";

import { Layout } from "../components/Layout";
import { ToolIcon } from "../components/ToolIcon";

const Index = () => (
  <Layout>
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
    >
      <GridItem>
        <ToolIcon
          icon={<LuFileJson2 size={30} />}
          title="JSON Viewer"
          href="/json-viewer"
        />
      </GridItem>
      <GridItem>
        <ToolIcon
          icon={<TbApi size={30} />}
          title="API Fetcher"
          href="/api-fetcher"
        />
      </GridItem>
    </Grid>
  </Layout>
);

export default Index;
