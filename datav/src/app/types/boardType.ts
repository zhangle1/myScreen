import { ChartStyleConfig } from "./ChartConfig";

export const BoardTypes = ['auto', 'free'] as const;
export type BoardType = typeof BoardTypes[number];

export interface BoardConfig{
    version: string;
    type: BoardType
    jsonConfig:ChartStyleConfig[]
}