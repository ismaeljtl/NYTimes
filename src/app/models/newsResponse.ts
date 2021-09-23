import { Result } from "./result";

export interface newsResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: Result[];
}
