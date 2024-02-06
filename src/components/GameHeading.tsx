import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platform);
  const platformName = usePlatform(platformId)?.name;

  const genreId = useGameQueryStore((s) => s.gameQuery.genre);
  const genreName = useGenre(genreId)?.name;

  const heading = `${platformName || ""} ${genreName || ""} Games`;
  return (
    <Heading marginBottom={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
