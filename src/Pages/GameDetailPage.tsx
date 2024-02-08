import { useParams } from "react-router-dom";
import useGame from "../Entities/useGame";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/gameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading } = useGame(slug as string);
  if (isLoading) return <Spinner />;
  if (!game) return null;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText limit={400}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailers id={game.id} />
          <GameScreenshots id={game.id} />
        </GridItem>
      </SimpleGrid>
      <Box
        position={"absolute"}
        left={0}
        top={0}
        zIndex="-2"
        h="100%"
        w="100%"
        bg={"#151515"}
      >
        <Box
          h="600px"
          backgroundColor="transparent"
          backgroundSize="cover"
          backgroundImage={`linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${game.background_image})`}
          zIndex="1"
        ></Box>
      </Box>
    </>
  );
};

export default GameDetailPage;
