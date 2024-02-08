import { useParams } from "react-router-dom";
import useGame from "../Entities/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/gameAttributes";

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
    </Box>
  );
};

export default GameDetailPage;
