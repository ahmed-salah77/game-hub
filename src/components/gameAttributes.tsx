import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../services/gameServices";
import DefinitionItems from "./DefinitionItems";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const gameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"} marginTop={5}>
      <DefinitionItems term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItems>
      <DefinitionItems term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default gameAttributes;
