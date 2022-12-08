import { BoardConfig } from "../config/boardType";

export interface Dashboard{
    id: string;
    config: BoardConfig
}


export interface WidgetInfo{
    id: string;
    loading: boolean;
    editing:boolean;
    selected: boolean;
    moved:boolean;
}