import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export default function UIprovider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
