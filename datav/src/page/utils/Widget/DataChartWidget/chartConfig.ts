import { WidgetProto, WidgetToolkit } from "../../../../app/types/config/widgetType"
import { ORIGINAL_TYPE_MAP } from "../../../../util/constants";
import { dataChartCreator } from "./config";


const Name = '数据图表'

export type ChartToolKit = WidgetToolkit&{};

const widgetToolkit :ChartToolKit ={
    create:opt =>{
        const widget = dataChartCreator(opt);
        widget.config.originalType = ORIGINAL_TYPE_MAP.chart;
        widget.id = widget.config.originalType + widget.id;
        return widget
    },
    getName:()=>{
        return Name
    }
}


const chartProto: WidgetProto = {
    originalType:ORIGINAL_TYPE_MAP.chart,
    toolkit:widgetToolkit,
}

export default  chartProto;