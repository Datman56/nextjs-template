import { Box, Grid, Text } from "@chakra-ui/react";

export default function Gallery(params) {
  var items = params.data;

  return (
    <>
      <Grid
        w="full"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={{ 
            base:4,
            md:8
        }}
      >
        {items.length < 1 ? (
          <Text>No items</Text>
        ) : (
          items.map((item, index) => (
            <Text key={index} h={32} bg="ui.darker">
              {item.name}
            </Text>
          ))
        )}
      </Grid>
    </>
  );
}