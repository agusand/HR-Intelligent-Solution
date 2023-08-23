import RequestOptions from "types/RequestOptions";

export type MakeRequestMethod = (options: RequestOptions) => Promise<Response | undefined>;
