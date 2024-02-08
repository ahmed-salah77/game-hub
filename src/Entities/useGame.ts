import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../services/gameServices";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/games",
  params: {
    key: "e0b15b7e0ce34bc284737e8b3312ccc7",
  },
});

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get<Game>(slug).then((res) => res.data),
  });

export default useGame;
