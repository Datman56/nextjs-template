import About from "@/components/common/About";
import HeroSection from "@/components/common/hero";
import Projects from "@/components/common/projects";
import { Heading, VStack } from "@chakra-ui/react";

export default async function Home() {

  return (
    <VStack width="full" minHeight="100vh" justifyContent="center">
      <HeroSection />
      <Projects />
      <About />
    </VStack>
  );
}
