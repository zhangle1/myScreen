import { WidgetInfo } from "../../../../../app/types/info/types";
import styled from "styled-components/macro";


export interface LayerWidgetProps{
    widgetInfo: WidgetInfo;
    key:string;
    children?:any
}

interface LayerWidgetInterface extends React.FC<LayerWidgetProps>{
    
}

export const LayerWidget:LayerWidgetInterface=(props:LayerWidgetProps) =>{
    const {widgetInfo,key,children}= props

    var wrapperProps={
        editing:widgetInfo.editing,
        moved:widgetInfo.moved,
        selected:widgetInfo.selected,
    }


    return (<LayerWidgetWrapper {...wrapperProps}>

    </LayerWidgetWrapper>)
}




const LayerWidgetWrapper =styled.div<{
    selected:boolean,
    editing
}>`
`