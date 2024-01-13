import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading =
    (gameQuery.platform ? gameQuery.platform.name + " " : "") +
    (gameQuery.genre ? gameQuery.genre.name + " " : "") +
    "Games";
  return <Heading marginBottom={5} fontSize={"5xl"} as="h1">{heading}</Heading>;
};

export default GameHeading;
