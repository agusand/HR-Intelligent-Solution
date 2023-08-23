import { useQuery } from "@tanstack/react-query";
import { User } from "pages/Dashboard/types";
import { useCallback, useEffect } from "react";

import { useQueryService } from "services/QueryService";

export default function useGetHigherProfiles(min: number) {
  const { makeApiRequest } = useQueryService();

  const getHigherProfiles = useCallback(async () => {
    const response = await makeApiRequest({
      endpointRoute: `profile/higher`,
      method: "POST",
      body: JSON.stringify({ min }),
      headers: { "Content-Type": "application/json" },
    });

    return response?.status === 201 ? response.json() : null;
  }, [makeApiRequest, min]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["getHigherProfiles"],
    queryFn: getHigherProfiles,
  });

  useEffect(() => {
    data?.sort(
      (a: { position: { scoring: number }[] }, b: { position: { scoring: number }[] }) =>
        b.position[0].scoring - a.position[0].scoring,
    );
  }, [data]);

  return { isLoading, data: (data || []) as User[], isError, error };
}
