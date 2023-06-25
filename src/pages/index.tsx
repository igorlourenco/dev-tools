import { Grid, GridItem } from "@chakra-ui/react";
import { LuFileJson2 } from "react-icons/lu";
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
    </Grid>
  </Layout>
);

export default Index;
