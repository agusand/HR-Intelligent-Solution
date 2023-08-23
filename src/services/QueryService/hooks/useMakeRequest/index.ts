import { useCallback, useMemo } from "react";

import { MakeRequestMethod } from "./types";

export default function useMakeRequest(baseUrl: string) {
  const defaultHeaders = useMemo<HeadersInit>(
    () => ({
      "Access-Control-Allow-Origin": "*",
    }),
    [],
  );

  const makeRequest = useCallback<MakeRequestMethod>(
    async ({ endpointRoute, method, body, headers, signal }) => {
      const url = `${baseUrl}/${endpointRoute}`;
      return fetch(url, { body, method, headers: { ...headers, ...defaultHeaders }, signal });
    },
    [baseUrl, defaultHeaders],
  );

  return { makeRequest };
}
