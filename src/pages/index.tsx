import { Grid, GridItem } from "@chakra-ui/react";
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
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  </Layout>
);

export default Index;
