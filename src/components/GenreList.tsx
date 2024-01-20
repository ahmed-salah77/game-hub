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
import { Genre } from "../services/genreServices";
interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
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
                onClick={() => setSelectedGenre(genre)}
                fontSize="lg"
                variant={"link"}
                whiteSpace={"wrap"}
                textAlign="left"
                fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
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
