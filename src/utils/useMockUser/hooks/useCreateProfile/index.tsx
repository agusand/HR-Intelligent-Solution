import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import { useQueryService } from "services/QueryService";

import User from "types/User";

export default function useCreateProfile() {
  const { makeApiRequest } = useQueryService();

  const createProfile = useCallback(
    async (user: User) => {
      const response = await makeApiRequest({
        endpointRoute: "profile",
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      return response?.status === 201 ? response : null;
    },
    [makeApiRequest],
  );

  const { isLoading, isError, mutate, error } = useMutation({
    mutationKey: ["createProfile"],
    mutationFn: createProfile,
  });

  return { isLoading, isError, createProfile: mutate, error };
}
