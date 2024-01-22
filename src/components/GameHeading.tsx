import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const platformName = gameQuery.platform
    ? platforms?.results.find((platform) => platform.id == gameQuery.platform)
        ?.name
    : "";
  const genreName = gameQuery.genre
    ? genres?.results.find((genre) => genre.id == gameQuery.genre)?.name
    : "";
  const heading =
    (gameQuery.platform ? platformName + " " : "") +
    (gameQuery.genre ? genreName + " " : "") +
    "Games";
  return (
    <Heading marginBottom={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
