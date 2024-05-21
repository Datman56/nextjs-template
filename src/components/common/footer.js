import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  IconButton,
  useColorModeValue,
  Grid,
  Stack,
  Divider,
  Wrap,
  Center,
} from "@chakra-ui/react";
import Logo from "./logo";
// import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box w="full">
      <Wrap
        direction="column"
        mx="auto"
        maxW="7xl"
        justify="center"
        alignItems={{ base: "center", md: "space-between" }}
        px={4}
      >
        <Divider />
        <Center py={8}>
          <Text>
            © 2020 RaulRico —{" "}
            <Link href="https://www.instagram.com/raulrico.uidev" isExternal>
              @raulrico.uidev
            </Link>
          </Text>
        </Center>
      </Wrap>
    </Box>
  );
}
