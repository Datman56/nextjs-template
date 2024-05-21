import { Box, Button, ButtonGroup, HStack, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";
import "./css/navbar.css";
import Logo from "./logo";

export default function Navbar(params) {
  return (
    <Box
      as="nav"
      mx="auto"
      w="full"
      px={4}
      py={2}
      color="white"
      bg="rgb(2,2,6,0.5)"
      // style={{ backdropFilter: "blur(6px)" }}
    >
      <HStack maxW="7xl" mx="auto" gap={4} alignItems="center">
        <Link href="/">
          <Logo style={{ width: "24px", fill: "white" }} />
        </Link>
        <ButtonGroup flexGrow={1} justifyContent="flex-end" display={{base:"none", md:"inline-flex"}}>
          <NavButton label="Home" url="/" />
          <NavButton label="Project" url="#projects" />
          <NavButton label="About me" url="#about" />
          <Link
            variant=""
            href="#"
            className="contact-btn"
          >
            <Text as="span" className="label" fontWeight={600}>Contact me</Text>
            <Text as="span" className="email" fontWeight={600}>hello@raulrico.work</Text>
          </Link>
        </ButtonGroup>
      </HStack>
    </Box>
  );
}

function NavButton(params) {
  return (
    <Button as={Link} href={params.url} variant="" onClick={params.onClick}>
      {params.label}
    </Button>
  );
}
