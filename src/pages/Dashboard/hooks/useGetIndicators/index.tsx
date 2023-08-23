import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import { Indicator } from "./types";

import { useQueryService } from "services/QueryService";

import User from "types/User";

export default function useGetIndicators(user: User) {
  const { makeApiRequest } = useQueryService();

  const getIndicators = useCallback(async () => {
    const response = await makeApiRequest({
      endpointRoute: `indicators/${user.email}`,
      method: "GET",
    });

    return response?.status === 200 ? response.json() : null;
  }, [user, makeApiRequest]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["getIndicators"],
    queryFn: getIndicators,
  });

  return { isLoading, data: (data || []) as Indicator[], isError, error };
}
