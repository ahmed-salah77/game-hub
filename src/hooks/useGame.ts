import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../services/gameServices";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/games",
  params: {
    key: "e0b15b7e0ce34bc284737e8b3312ccc7",
  },
});

const useGame = (id: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => apiClient.get<Game>(id).then((res) => res.data),
  });

export default useGame;
