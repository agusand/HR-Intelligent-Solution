import GeneralUser from "types/User";

export type Indicator = { indicator: string; value: number };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type User = GeneralUser & { scoring?: number; position?: any };
