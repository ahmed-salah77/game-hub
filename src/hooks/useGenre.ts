import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  if (!id) return null;
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id == id);
};

export default useGenre;
