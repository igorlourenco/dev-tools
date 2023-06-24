import { Grid, GridItem, Link } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Index = () => (
  <Layout>
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={6}
    >
      <GridItem>
        <Link href="/json-viewer">JSON VIEWER</Link>
      </GridItem>
    </Grid>
  </Layout>
);

export default Index;
