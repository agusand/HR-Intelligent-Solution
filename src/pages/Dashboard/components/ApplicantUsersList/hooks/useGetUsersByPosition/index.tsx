import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { User } from "pages/Dashboard/types";

import { useQueryService } from "services/QueryService";

export default function useGetUsersByPosition(positionId?: number) {
  const { makeApiRequest } = useQueryService();

  const getUsersByPosition = useCallback(async () => {
    const response =
      typeof positionId !== "undefined" && !isNaN(positionId)
        ? await makeApiRequest({
            endpointRoute: `profile/${positionId}`,
            method: "GET",
          })
        : undefined;

    return response?.status === 200 ? response.json() : null;
  }, [makeApiRequest, positionId]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["getUsersByPosition", positionId],
    queryFn: getUsersByPosition,
  });

  return { isLoading, data: (data || []) as User[], isError, error };
}
