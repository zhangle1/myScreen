import { ChartStyleConfig } from "../../app/types/config/ChartConfig";

export const BoardTypes = ['auto', 'free'] as const;
BoardTypes.includes('auto');
export type BoardType = typeof BoardTypes[number];

export interface BoardConfig{
    version: string;
    type:BoardType;
    jsonConfig:{
        props:ChartStyleConfig;
    }
}