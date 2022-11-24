import { ChartStyleConfig } from "./ChartConfig";


export const WidgetTypes = [
    'chart',
    'media',
    'container',
    'controller',
    'button',
    'group',
  ] as const;
  export type WidgetType = typeof WidgetTypes[number];


export interface Widget{
    id: string;
    config: WidgetConf;
}

export interface WidgetConf{
    version: string;
    type: WidgetType; //WidgetType
    customConfig: CustomConfig;
}

export type CustomConfig ={
    // datas?: ChartDataConfig[];
    props?: ChartStyleConfig[];
    settings?: ChartStyleConfig[];
    interactions?: ChartStyleConfig[];
}