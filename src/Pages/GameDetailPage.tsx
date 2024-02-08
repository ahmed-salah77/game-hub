import { useParams } from "react-router-dom";
import useGame from "../Entities/useGame";
import { Box, Flex, Heading, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
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
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText limit={600}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <Flex flexWrap={"wrap"} gap={5}>
        <GameTrailers id={game.id} />
        <GameScreenshots id={game.id} />
      </Flex>
    </Box>
  );
};

export default GameDetailPage;
