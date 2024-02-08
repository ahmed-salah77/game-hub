import { useQuery } from "@tanstack/react-query";
import { Game } from "../services/gameServices";
import { apiClient } from "../services/api-client";

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get<Game>(`games/${slug}`).then((res) => res.data),
  });

export default useGame;
