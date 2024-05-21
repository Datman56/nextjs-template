"use client";
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  ButtonGroup,
  Button,
  Spacer,
  VStack,
  Wrap,
  HStack,
  Link,
} from "@chakra-ui/react";
import "./css/hero.css";
import { useState } from "react";
import { GithubIcon } from "./icons";

const socialLinks = [{ name: "github", url: "" }];

export default function HeroSection() {
  const [ctaColor, setCtaColor] = useState("yellow");

  const handleHover = (id) => {
    if (id === "dev") {
      setCtaColor("cyan");
    }
    if (id === "ui") {
      setCtaColor("purple");
    }
  };

  return (
    <Box
      bg="black"
      h="100vh"
      maxH={860}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      py={16}
    >
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          lg: "repeat(1, 1fr 2fr 1fr)",
        }}
        gap={{ base: 4, md: 8 }}
        m="auto"
        maxW="7xl"
      >
        {/* fist Box */}
        <GridItem
          order={{ base: 1, lg: 2 }}
          maxW={720}
          colStart={{ base: 1, lg: 2 }}
          colEnd={{ base: 2, lg: 4 }}
        >
          <Heading
            size={{ base: "3xl", lg: "4xl" }}
            letterSpacing={2}
            fontWeight={500}
            textAlign="left"
            color="white"
            display="grid"
            className="animation animation-1"
            style={{ opacity: 0 }}
          >
            <Text as="span">Hello, I'm a </Text>{" "}
            <Text as="span">Font-end Developer</Text>{" "}
            <Text as="span">& Ux/Ui Designer</Text>
          </Heading>
        </GridItem>

        {/* second box */}
        <VStack maxW={480} order={{ base: 2, lg: 1 }}>
          <Spacer flexGrow={1} />
          <Text
            textAlign="left"
            className="animation animation-2"
            style={{ opacity: 0 }}
            color="ui.neutral"
          >
            Enthusiast Developer and Graphic Designer based in Cancun, Mexico. I
            specialize in crafting beautiful and impactful web experiences. I
            believe in the power of clean aesthetics, where every element serves
            a purpose and enhances the overall user experience.
          </Text>
        </VStack>

        <GridItem
          colStart={{ base: 1, lg: 2 }}
          colEnd={{ base: 2, lg: 4 }}
          order={3}
        >
          <Wrap w="full" gap={2} mt={{ base: 4 }}>
            <Button
              colorScheme={ctaColor}
              fontWeight={500}
              rounded="full"
              className="animation animation-3"
              style={{ opacity: 0 }}
            >
              Explore Projects
            </Button>
            <HStack style={{ opacity: 0 }} className="animation animation-4" gap={4}>
              <Button
                as={Link}
                href={socialLinks[0].url}
                title={socialLinks[0].name}
                variant=""
                color="ui.neutral"
                _hover={{color:"ui.white"}}
                fontWeight={500}
                rounded="full"
              >
                <GithubIcon />
              </Button>
            </HStack>
          </Wrap>
        </GridItem>
      </Grid>
    </Box>
  );
}