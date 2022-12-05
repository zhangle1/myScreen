import { Widget } from "../types/config/widgetType";
import { Dashboard } from "../types/info/types";



export interface EditBoardStack {
    dashBoard: Dashboard,
    widgetRecord:Record<string,Widget>
}