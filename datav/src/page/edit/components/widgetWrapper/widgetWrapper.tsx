import { Widget } from "../../../../app/types/config/widgetType";
import { RectConfig } from "../../../../app/types/config/types";
import { Rnd } from "react-rnd";
import styled from "styled-components/macro";
import classNames from "classnames";

export interface WidgetWrapperProps {
  widget: Widget;
  key: string;
  children?: any;
  scale: number;
  onDragOrResizeAction: (WidgetOperation: WidgetOperation) => void;
}

interface WidgetWrapperInterface extends React.FC<WidgetWrapperProps> {}

export interface WidgetOperation {
  key: string;
  newRect: RectConfig;
  type: "drag" | "resize";
}

export const WidgetWrapper: WidgetWrapperInterface = (
  props: WidgetWrapperProps
) => {
  const { widget, key, onDragOrResizeAction,scale, children } = props;

  const maskWrapperClazz = classNames("");


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
    scale:scale,
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
          width: rect.width,
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
      <WeightWrapper
        width={rect.width}
        height={rect.height}
        left={rect.x}
        top={rect.y}
      ></WeightWrapper>

      <MaskWrapper
        className={maskWrapperClazz}
        width={rect.width}
        height={rect.height}
        left={rect.x}
        top={rect.y}
      >
        {/* y:{src.top}x:{src.left} 高:{src.height}宽:{src.width} */}
      </MaskWrapper>
    </Rnd>
  ) as any;
};

const WeightWrapper = styled.div<{
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

const MaskWrapper = styled.div<{
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

  &:hover,
  &:active {
    border-color: "#000000";
    border-style: dotted;
    border-width: 5px;
  }


  &.selected {
    border-color: "#000000";
    border-style: solid;
    border-width: 2px;
    &:hover,
    &:active {
      border-style: solid;
    }
  }
  /* &.editing {
    border-color: ${p => (p.hideBorder ? 'transparent' : p.theme.success)};
    border-style: solid;
    border-width: 2px;
    &:hover,
    &:active {
      border-width: ${p => (p.hideBorder ? 0 : '2px')};
    }
  } */


`;
