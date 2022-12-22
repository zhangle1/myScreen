import { RectConfig } from "../../../../app/types/config/types";
import { Widget, WidgetType } from "../../../../app/types/config/widgetType";
import uuid from "../../../../uuid";



export const initFreeWidgetRect = ():RectConfig =>({
    x: Math.ceil(Math.random() * 200),
    y: Math.ceil(Math.random() * 200),
    // x: 100,
    // y: 100,
    width: 400,
    height: 300,
})


export const widgetTpl = () :Widget =>{
    return {
        id:uuid(),
        config:{
            name:'',
            originalType:'',
            version:'0.1',
            index:0,
            type: '' as WidgetType,
            rect:initFreeWidgetRect(),
            customConfig:{
                props:[]
            }
        }
    }
}