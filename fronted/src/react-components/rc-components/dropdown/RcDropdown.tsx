import React from "react";
import Trigger, { TriggerProps } from "../trigger";
import { ActionType, BuildInPlacements } from "../trigger/interface";
import useAccessibility from "./hooks/useAccessibility";

export interface DropdownProps extends Pick<TriggerProps, "children"> {

  onVisibleChange?: (visible: boolean) => void;

  visible?: boolean;
  trigger?: ActionType | ActionType[];
  autoFocus?: boolean;
  placement?: string;
  placements?: BuildInPlacements;
}

function RcDropdown(props: DropdownProps, ref: any) {
  const { 
    visible,
    trigger = ['hover'],
    autoFocus,
    placement = 'bottomLeft',
    ...otherProps
  } = props;

  const [triggerVisible, setTriggerVisible] = React.useState<boolean>(false);
  const mergedVisible = 'visible' in props ? triggerVisible : triggerVisible;

  const triggerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => triggerRef.current);

  useAccessibility({
    visible: mergedVisible,
    setTriggerVisible,
    triggerRef,
    onVisibleChange: props.onVisibleChange,
    autoFocus,
  })


  const onVisibleChange = (newVisible: boolean) => {
    const { onVisibleChange: onVisibleChangeProp } = props;

    setTriggerVisible(newVisible);
    if (typeof onVisibleChangeProp === 'function') {
      onVisibleChangeProp(newVisible);
    }
  };



  const renderChildren = () => {
    return props.children;
  };
  // console.log("dropdown:"+ mergedVisible)
  return <Trigger 
  popupVisible={mergedVisible}
  ref={triggerRef}
  action={trigger}
  onPopupVisibleChange={onVisibleChange}
  alignPoint={false}
  {...otherProps}>{renderChildren()}</Trigger>;
}

export default React.forwardRef(RcDropdown);
