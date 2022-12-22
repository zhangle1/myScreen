import { WidgetInfo } from "../app/types/info/types";

export const createWidgetInfo = (id: string): WidgetInfo =>{
    const widgetInfo:WidgetInfo = {
        id:id,
        loading:false,
        editing:false,
        selected:false, 
    }
    return widgetInfo;
}