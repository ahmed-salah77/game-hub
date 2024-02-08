import useTrailers from "../hooks/useTrailers";
import { Box } from "@chakra-ui/react";
const GameTrailers = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useTrailers(id);
  if (isLoading) return null;
  if (error) throw error;
  if (!data) return null;
  const firstTrailer = data.results[0];
  return firstTrailer ? (
    <Box marginTop={5}>
      <video
        width={"100%"}
        src={firstTrailer.data[480]}
        controls
        poster={firstTrailer.preview}
      ></video>
    </Box>
  ) : null;
};

export default GameTrailers;
