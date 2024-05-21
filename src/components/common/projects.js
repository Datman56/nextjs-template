import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import dataJson from "@/data/portfolio.json";
import { ExternalLinkIcon, GithubIcon } from "./icons";
import { DisplayCard } from "../projects/card";

export default function Projects(params) {
  return (
    <Box
      w="full"
      maxW="7xl"
      mb={{ base: 8, md: 16 }}
      px={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Spacer as="div" id="projects" />
      <Divider />
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
            Projects
          </Heading>
        </Box>
        <Box
          gridColumnStart={{ base: 1, md: 4 }}
          gridColumnEnd={{ base: 13, md: 13 }}
        >
          <HStack justify="space-between" mb={4}>
            <Text fontSize="sm">
            {/* {dataJson.length} Projects */}
            </Text>
            <Link href="/projects" fontSize="sm" color="rgb(236, 201, 75)">View all</Link>
          </HStack>
        <Grid
          // p={8}
          // gridColumnStart={{ base: 1, md: 4 }}
          // gridColumnEnd={{ base: 13, md: 13 }}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            // lg: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={8}
        >
          {dataJson.slice(0, 4).map((item, index) => (
            <DisplayCard index={index} data={item} />
          ))}
        </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

function CardItem(params) {
  const index = params.index;
  const data = params.data;
  const technologies = params.data.technologies.join(",");

  return (
    <Grid
      key={index}
      bg="ui.darker"
      color="white"
      gridTemplateColumns={{ base: "repeat(1,1fr 2fr)", md: "repeat(1,1fr)" }}
      textAlign="left"
    >
      <Box
        bg="#1B1B1B"
        aspectRatio={{ base: 1 / 1, md: 4 / 3, lg: 9 / 6 }}
        overflow="hidden"
      >
        <Image src={"/images/preview.svg"} width="full" m="auto" />
        {/* <Tag
          colorScheme={params.data.type !== "ui" ? "cyan" : "purple"}
          position="absolute"
          top={2}
          right={2}
          fontSize={{ base: "xx-small" }}
        >
          {params.data.type}
        </Tag> */}
      </Box>
      <VStack px={4} py={4} gap={2} justifyContent="start" align="start">
        {/* <Text noOfLines={3}>{data.description}</Text> */}
        <Wrap gap={2}>
          {data.technologies.slice(0, 2).map((item, index) => (
            <Badge
              key={index}
              bg="ui.dark"
              color="ui.neutral"
              fontSize="x-small"
            >
              {item}
            </Badge>
          ))}
        </Wrap>
        <Heading size="sm" fontWeight={500} noOfLines={2} textTransform="capitalize">
          {data.name}
        </Heading>
        <Spacer gridRow={1} />
        <Wrap color="ui.neutral" justify="end">
          <Link href={data.github} mr={2} _hover={{color:"ui.white"}}>
            <GithubIcon style={{width:20}} />
          </Link>
          <Link href={data.link} mr={2} _hover={{color:"ui.white"}}>
            <ExternalLinkIcon style={{width:20}} />
          </Link>
        </Wrap>
      </VStack>
    </Grid>
  );
}
