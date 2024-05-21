"use client"
import {
  Box,
  Center,
  Grid,
  HStack,
  Heading,
} from "@chakra-ui/react";

import dataJson from "@/data/portfolio.json";
import { DisplayCard } from "@/components/projects/card";
import { useState } from "react";

export default function Page(params) {
  const [projects, setProjects] = useState([]);

  const displayedItems = projects;

  return (
    <Box flexGrow={1} pt={16}>
      <HStack w="full" maxW="7xl" mx="auto" px={4}>
        <Box></Box>
        <Box flexGrow={1}>
          {displayedItems.length <= 0 ? (
            <Center>
              <Heading m="auto">No items</Heading>
            </Center>
          ) : (
            <Grid
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap={4}
            >
              {displayedItems.map((item, index) => (
                <DisplayCard index={index} data={item} />
              ))}
            </Grid>
          )}
        </Box>
      </HStack>
    </Box>
  );
}


