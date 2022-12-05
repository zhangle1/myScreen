import { Widget } from "../../../../app/types/config/widgetType";
import { RectConfig } from "../../../../app/types/config/types";
import { Rnd } from "react-rnd";

export interface WidgetWrapperProps {
  widget: Widget;
  key: string;
  onDragOrResizeAction: (WidgetOperation) => {};
}

interface WidgetOperation {
  key: string;
  newRect: RectConfig;
}

const WidgetWrapper = (props: WidgetWrapperProps) => {
  const { widget, key, onDragOrResizeAction } = props;
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
    size:{
        height:rect.height,
        width:rect.width
    }
    position
  };

  return <Rnd {...newProps}></Rnd>;
};
