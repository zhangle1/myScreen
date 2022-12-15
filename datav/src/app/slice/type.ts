import { Widget } from "../types/config/widgetType";
import { Dashboard, WidgetInfo } from "../types/info/types";


export interface EditBoardState {
    stack:EditBoardStack;
    widgetInfoRecord: Record<string, WidgetInfo>;
}



export interface EditBoardStack {
    dashBoard: Dashboard,
    widgetRecord:Record<string,Widget>
}