import { Widget } from "../../../../app/types/config/widgetType";
import { RectConfig } from "../../../../app/types/config/types";
import { Rnd } from "react-rnd";
import styled from "styled-components/macro";

export interface WidgetWrapperProps {
  widget: Widget;
  key: string;
  children?:any;
  onDragOrResizeAction: (WidgetOperation: WidgetOperation) => void;
}

interface WidgetWrapperInterface extends React.FC<WidgetWrapperProps> {


}


export interface WidgetOperation {
  key: string;
  newRect: RectConfig;
  type: "drag" | "resize";
}



export const WidgetWrapper: WidgetWrapperInterface = (props: WidgetWrapperProps) => {
  const { widget, key, onDragOrResizeAction,children } = props;
  var rect = widget.config.rect;
  var newProps = {
    key: key,
    style: {
      display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      border: "solid 1px #ddd",
      background: "#f0f0f0",
    },
    size: {
      height: rect.height,
      width: rect.width,
    },
    position: {
      x: rect.x,
      y: rect.y,
    },
    onDragStop: (e, d: any) => {
      onDragOrResizeAction({
        key: key,
        newRect: {
          x: d.x,
          y: d.y,
          width:  rect.width,
          height: rect.height,
        },
        type: "drag",
      });
    },
    onResize: (e, direction, ref: any, delta, position: any) => {
      onDragOrResizeAction({
        key: key,
        newRect: {
          x: position.x,
          y: position.y,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        },
        type: "resize",
      });
    },
  };

  return (
    <Rnd {...newProps}>
      <TestWrapper
        width={rect.width}
        height={rect.height}
        left={rect.x}
        top={rect.y}
      >
        {/* y:{src.top}x:{src.left} 高:{src.height}宽:{src.width} */}
      </TestWrapper>
    </Rnd>
  ) as any;
};

const TestWrapper = styled.div<{
  width: number;
  height: number;
  top: number;
  left: number;
}>`
  position: absolute;
  /* left: ${(p) => p.left}px;
        top: ${(p) => p.top}px; */
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background-color: red;
`;
