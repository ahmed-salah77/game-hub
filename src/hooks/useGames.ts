import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../services/gameServices";

const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};
export default useGames;
