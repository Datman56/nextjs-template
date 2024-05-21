import { Box, Divider, Grid, Heading, Spacer, Text } from "@chakra-ui/react";

const content =
  "Hola! I'm Raul Rico, a graphic designer and front-end developer based in Cancun, Mexico. With over 8 years of experience in graphic design. My journey into coding began as an extension of my passion for art, and it quickly evolved into a love for building functional, user-friendly Web-App experiences.";

export default function About(params) {
  return (
    <Box w="full" maxW="7xl" px={4} bg="ui.black">
      <Spacer as="div" id="about" />
      <Divider mb={2} />
      <Grid
        align="baseline"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={{ base: 4, md: 8 }}
        py={{
          base: 0,
          sm: 2,
          md: 4,
          xl: 8,
        }}
      >
        <Box
          gridColumnStart={{ base: 1, md: 1 }}
          gridColumnEnd={{ base: 13, md: 4 }}
        >
          <Heading
            mr="auto"
            size={{
              base: "md",
              md: "lg",
            }}
            fontWeight={500}
            textAlign="left"
          >
            About me
          </Heading>
        </Box>
        <Box
          gridColumnStart={{ base: 1, md: 4 }}
          gridColumnEnd={{ base: 13, md: 13 }}
        >
          <Text
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            textAlign="left"
            maxW={720}
          >
            {content}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
