import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav" bg="coral">
        Navigation bar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Side Menu
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main area
      </GridItem>
    </Grid>
  );
}

export default App;
