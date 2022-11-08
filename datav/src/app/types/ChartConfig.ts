import { ValueOf } from "../../types";
import { ChartDataViewFieldCategory, ChartStyleSectionComponentType, DataViewFieldType } from "../constants";


export type ChartConfigBase = {
    label?: string;
    key: string;
}


export type ChartStyleConfig =ChartConfigBase &{

    required?: boolean;
    rows?: ChartDataSectionField[];

}

export type ChartStyleSectionGroup = ChartStyleSectionRow & {
    rows?: ChartStyleSectionGroup[];
  };

  export type ChartStyleSectionRow = {
    label: string;
    key: string;
    default?: any;
    value?: any;
    disabled?: boolean;
    hide?: boolean;

    comType: ValueOf<typeof ChartStyleSectionComponentType>;
    hidden?: boolean;
  };



export type ChartDataSectionField ={
    uid?: string;
    colName: string;
    desc?: string;
    size?: number;
    path?: string[];
    type: DataViewFieldType;
    category: Uncapitalize<keyof typeof ChartDataViewFieldCategory>;
    field?: string;

}


export enum ChartDataSectionType {
    Group = 'group',
    Aggregate = 'aggregate',
    Mixed = 'mixed',
    Filter = 'filter',
    Color = 'color',
    Info = 'info',
    Size = 'size',
  }