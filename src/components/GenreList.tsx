import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const setSelectedGenre = useGameQueryStore((s) => s.setGenre);
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  if (isLoading) {
    return (
      <>
        <Heading marginBottom={5} fontSize="3xl">
          Genres
        </Heading>
        <GenreListSkeleton />
      </>
    );
  }
  return (
    <>
      <Heading marginBottom={5} fontSize="3xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenre(genre.id)}
                fontSize="lg"
                variant={"link"}
                whiteSpace={"wrap"}
                textAlign="left"
                fontWeight={selectedGenre == genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
