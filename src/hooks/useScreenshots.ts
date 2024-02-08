import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Screenshot } from "../Entities/useScreenshot";

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshots;
