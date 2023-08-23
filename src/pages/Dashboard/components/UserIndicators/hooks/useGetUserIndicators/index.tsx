import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { Indicator } from "pages/Dashboard/types";

import { useQueryService } from "services/QueryService";

export default function useGetUserIndicators(positionId: number, activeUser?: string) {
  positionId;
  const { makeApiRequest } = useQueryService();

  const getUsersIndicators = useCallback(async () => {
    const response =
      typeof activeUser !== "undefined"
        ? await makeApiRequest({
            endpointRoute: `indicators/${activeUser}`,
            method: "GET",
          })
        : undefined;

    return response?.status === 200 ? response.json() : null;
  }, [activeUser, makeApiRequest]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["getUsersIndicators", activeUser],
    queryFn: getUsersIndicators,
  });

  return { isLoading, data: (data || []) as Indicator[], isError, error };
}
