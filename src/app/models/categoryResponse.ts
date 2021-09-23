import { Categories } from "./categories";
import { Result } from "./result";

export interface categoryResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: Categories[];
}
