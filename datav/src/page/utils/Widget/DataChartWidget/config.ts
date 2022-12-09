import { WidgetCreateProps } from "../../../../app/types/config/widgetType";
import { widgetTpl } from "../../WidgetManager/utils/init";


export const dataChartCreator = (opt:WidgetCreateProps) =>{
    const widget = widgetTpl();

    widget.config.type='chart'

    return widget;
}