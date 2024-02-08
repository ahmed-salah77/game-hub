import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../Entities/useTrailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailer", id],
    queryFn: apiClient.getAll,
  });
};
export default useTrailers;
