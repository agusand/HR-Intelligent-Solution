import { Answer } from "../../types";

export type CreateAnswerMethod = (answer: Answer) => Promise<Response | null>;
