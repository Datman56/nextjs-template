import { ChakraProvider } from "@chakra-ui/react";

export default function UIprovider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
