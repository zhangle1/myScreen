import React from "react";
import RcDropdown from "../../react-components/rc-components/dropdown/RcDropdown";
import useEvent from "../../react-components/rc-components/util/hooks/useEvent";
import useMergedState from "../../react-components/rc-components/util/hooks/useMergedState";
import { cloneElement } from "../_utils/reactNode";
import { tuple } from "../_utils/type";


const Placements = tuple(
  'topLeft',
  'topCenter',
  'topRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
  'top',
  'bottom',
);

type Placement = typeof Placements[number];

export interface DropdownProps {
  children?: React.ReactNode;
  disabled?: boolean;
  placement?: Placement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;

}

interface DropdownInterface extends React.FC<DropdownProps> {}

const Dropdown: DropdownInterface = (props: DropdownProps) => {
  const { children, disabled ,visible,onVisibleChange} = props;

  const child = React.Children.only(children) as React.ReactElement<any>;

  const getPlacement = ()=>{
    const { placement } = props;
    if(!placement){
      return 'bottomLeft'
    }

    if (placement.includes('Center')) {
      const newPlacement = placement.slice(0, placement.indexOf('Center'));
      return newPlacement;
    }

    return placement;

  }

  // =========================== Visible ============================
  const [mergedVisible, setVisible] = useMergedState(false, {
    value: visible,
  });

  const onInnerVisibleChange = useEvent((nextVisible: boolean) => {
    onVisibleChange?.(nextVisible);
    setVisible(nextVisible);
  });

  const dropdownTrigger = cloneElement(child, {
    disabled,
  });
  return <RcDropdown
  visible={mergedVisible}


  >{dropdownTrigger}</RcDropdown>;
};

export default Dropdown;
