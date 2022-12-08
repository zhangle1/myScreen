import { ChartStyleConfig } from "./ChartConfig";
import { RectConfig } from "./types";

export const WidgetTypes = [
  "chart",
  "media",
  "container",
  "controller",
  "button",
  "group",
] as const;
export type WidgetType = typeof WidgetTypes[number];

export interface WidgetProto{
  originalType: string;
  toolkit: WidgetToolkit
}


export interface WidgetCreateProps{

}

export  interface WidgetToolkit{
  create:(T: WidgetCreateProps)=>Widget;
  getName:(local?:string)=>string;
}


export interface Widget {
  id: string;
  config: WidgetConf;
}

export interface WidgetConf {
  version: string;
  type: WidgetType; //WidgetType
  customConfig: CustomConfig;
  index: number;
  rect: RectConfig; // rect of freeBoard
}

export type CustomConfig = {
  // datas?: ChartDataConfig[];
  props?: ChartStyleConfig[];
  settings?: ChartStyleConfig[];
  interactions?: ChartStyleConfig[];
};
