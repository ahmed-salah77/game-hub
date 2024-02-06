import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  if (!id) return null;
  return genres?.results.find((g) => g.id == id);
};

export default useGenre;
