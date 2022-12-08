import { WidgetProto } from "../../../app/types/config/widgetType";
import { widgetManagerInstance  as widgetManager} from "./widgetManager";
// import { widgetManagerInstance as widgetManager } from './WidgetManager';

const protoList: WidgetProto[] =[
    
]


protoList.forEach(item=>{
        widgetManager.register(item)
})


export default widgetManager