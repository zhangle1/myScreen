import React, { useEffect, useState } from "react";
import { AlignType, MobileConfig, Point, StretchType } from "../interface";
import PopupInner, { PopupInnerRef } from "./PopupInner";

export interface PopupProps {
  visible?: boolean;
  style?: React.CSSProperties;
  getClassNameFromAlign?: (align: AlignType) => string;
  onAlign?: (element: HTMLElement, align: AlignType) => void;
  getRootDomNode?: () => HTMLElement;
  align?: AlignType;
  destroyPopupOnHide?: boolean;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onTouchStart?: React.TouchEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  stretch?: StretchType;
  children?: React.ReactNode;
  point?: Point;
  zIndex?: number;
  mask?: boolean;

  // Motion
  // motion: CSSMotionProps;
  // maskMotion: CSSMotionProps;
  forceRender?: boolean;

  // Legacy
  // animation: AnimationType;
  // transitionName: TransitionNameType;
  // maskAnimation: AnimationType;
  // maskTransitionName: TransitionNameType;

  // Mobile
  mobile?: MobileConfig;
}

const RcPopup = React.forwardRef<PopupInnerRef, PopupProps>(
  ({ visible, mobile, ...props }, ref) => {
    const [innerVisible, serInnerVisible] = useState(visible);
    const [inMobile, setInMobile] = useState(false);
    const cloneProps = { ...props, visible: innerVisible };

    // We check mobile in visible changed here.
    // And this also delay set `innerVisible` to avoid popup component render flash
    useEffect(() => {
      serInnerVisible(visible);
      if (visible && mobile) {
        //   setInMobile(isMobile());
      }
    }, [visible, mobile]);


    const popupNode: React.ReactNode = (<PopupInner {...cloneProps} ref={ref} />
    );

    return <div>
        {popupNode}
    </div>;
  }
);

RcPopup.displayName = "RcPopup";

export default RcPopup;
