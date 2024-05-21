"use client";
import {
  Box,
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  Wrap,
  baseTheme,
} from "@chakra-ui/react";
import { useState } from "react";

export default function FilterBar(params) {
  const [searchForItem, setSearchForItem] = useState("");

  const allItems = params.data;
  const displayedItems = allItems;

  const handleSearch = async () => {};

  return (
    <Box mt={2} mb={4}>
      <HStack>
        <FormControl>
          <Input
            type="text"
            value={searchForItem}
            onChange={(e) => setSearchForItem(e.target.value)}
            placeholder="Search for project"
          />
        </FormControl>
      </HStack>
      <Text mt={2}>{displayedItems.length} Items</Text>
      {/* <Divider /> */}
    </Box>
  );
}
