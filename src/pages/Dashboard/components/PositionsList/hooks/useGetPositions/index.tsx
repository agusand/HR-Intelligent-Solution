import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { Position } from "./types";

import { useQueryService } from "services/QueryService";

export default function useGetPositions() {
  const { makeApiRequest } = useQueryService();

  const getPositions = useCallback(async () => {
    const response = await makeApiRequest({
      endpointRoute: `position`,
      method: "GET",
    });

    return response?.status === 200 ? response.json() : null;
  }, [makeApiRequest]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["getPositions"],
    queryFn: getPositions,
  });

  return { isLoading, data: (data || []) as Position[], isError, error };
}
