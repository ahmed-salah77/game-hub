import usePlatforms from "../hooks/usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  if (!id) return null;
  return platforms?.results.find((p) => p.id == id);
};

export default usePlatform;
