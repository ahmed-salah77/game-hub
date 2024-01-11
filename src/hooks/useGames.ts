import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[];
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = ()=>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games",{signal:controller.signal})
      .then((res) => {setGames(res.data.results);console.log(res.data)})
      .catch((err) => {
        if(err instanceof CanceledError)
          return;
        setError(err.message);
      });
      return () => controller.abort();
  }, []);

  return { games,setGames,error,setError};
}

export default useGames;