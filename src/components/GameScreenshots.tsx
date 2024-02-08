import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { GridItem, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

const GameScreenshots = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useScreenshots(id);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} paddingTop={5}>
      {data?.results.map((screen) => (
        <GridItem key={screen.image} maxW={"400px"}>
          <Image src={screen.image} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
