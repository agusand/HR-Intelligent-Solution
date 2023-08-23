import { QueryClient } from "@tanstack/react-query";

import { MakeRequestMethod } from "./hooks/useMakeRequest/types";

export default interface QueryServiceValue {
  readonly queryClient: QueryClient;
  readonly makeApiRequest: MakeRequestMethod;
}
