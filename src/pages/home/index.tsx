import React from "react";
import { Navigation } from "../components/common/Navigation/Navigation";
import { Center, Flex, Heading, Button, Link, Text } from "@chakra-ui/react";
import { NAV_ITEMS } from "@/constants/navItems";

const App = () => {
  return (
    <>
      <Navigation />
      <Center flexDir={"column"}>
        <Heading>Chakrastic PWA Template</Heading>
        <Text>A template for creating a PWA with NextJS and Chakra UI.</Text>
      </Center>
    </>
  );
};

export default App;
