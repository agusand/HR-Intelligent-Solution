import { createContext, useContext } from "react";
import { useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
/* import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; */

import QueryServiceValue from "./QueryServiceValue";

import GenericProps from "types/GenericProps";
import useMakeRequest from "./hooks/useMakeRequest";

const QueryService = createContext<QueryServiceValue | null>(null);

export const useQueryService = () => {
  return useContext(QueryService) as QueryServiceValue;
};

export function QueryServiceProviderChild({ children }: GenericProps) {
  const { makeRequest: makeApiRequest } = useMakeRequest(import.meta.env.VITE_API_URL || "");

  const queryClient = useQueryClient();
  return (
    <QueryService.Provider
      value={{
        queryClient,
        makeApiRequest,
      }}
    >
      {children}
    </QueryService.Provider>
  );
}

export function QueryServiceProvider({ children }: GenericProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <QueryServiceProviderChild>{children}</QueryServiceProviderChild>
    </QueryClientProvider>
  );
}
