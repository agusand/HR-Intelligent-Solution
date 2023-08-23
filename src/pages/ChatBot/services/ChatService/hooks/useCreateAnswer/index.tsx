import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import { CreateAnswerMethod } from "./types";
import { Answer } from "../../types";

import { useQueryService } from "services/QueryService";

import useMockUser from "utils/useMockUser";

export default function useCreateAnswer() {
  const { makeApiRequest } = useQueryService();

  const { email } = useMockUser();

  const createAnswer = useCallback<CreateAnswerMethod>(
    async (answer: Answer) => {
      const response = await makeApiRequest({
        endpointRoute: "answer",
        method: "POST",
        body: JSON.stringify({ ...answer, profile: email }),
        headers: { "Content-Type": "application/json" },
      });

      return response?.status === 201 ? response : null;
    },
    [email, makeApiRequest],
  );

  const { isLoading, isError, mutate, error } = useMutation({
    mutationKey: ["createAnswer"],
    mutationFn: createAnswer,
  });

  return { isLoading, isError, createAnswer: mutate, error };
}
