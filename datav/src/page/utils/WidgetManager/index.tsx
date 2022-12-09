import { WidgetProto } from "../../../app/types/config/widgetType";
import chartProto from "../Widget/DataChartWidget/chartConfig";
import { widgetManagerInstance  as widgetManager} from "./widgetManager";
// import { widgetManagerInstance as widgetManager } from './WidgetManager';

const protoList: WidgetProto[] =[
        chartProto
]

protoList.forEach(item=>{
        widgetManager.register(item)
})


export default widgetManager