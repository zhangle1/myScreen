import classNames from "classnames";
import React, { useRef, useState } from "react";
import RcAlign, { RefAlign } from "../../align/RcAlign";
import useLayoutEffect from "../../util/hooks/useLayoutEffect";
import { AlignType, Point } from "../interface";

export interface PopupInnerProps {
  visible?: boolean;

  // prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  zIndex?: number;

  // Motion
  // motion: CSSMotionProps;
  destroyPopupOnHide?: boolean;
  forceRender?: boolean;

  // Legacy Motion
  // animation: AnimationType;
  // transitionName: TransitionNameType;

  // Measure
  // stretch?: StretchType;

  // Align
  align?: AlignType;
  point?: Point;
  getRootDomNode?: () => HTMLElement;
  getClassNameFromAlign?: (align: AlignType) => string;
  onAlign?: (element: HTMLElement, align: AlignType) => void;

  // Events
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface PopupInnerRef {
  forceAlign: () => void;
  getElement: () => HTMLElement;
}

const PopupInner = React.forwardRef<PopupInnerRef, PopupInnerProps>(
  (props, ref) => {
    const {
      visible,
      className,

      style,
      children,
      zIndex,

      destroyPopupOnHide,
      forceRender,

      align,
      point,
      getRootDomNode,
      getClassNameFromAlign,
      onAlign,

      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onTouchStart,
      onClick,
    } = props;

    const alignRef = useRef<RefAlign>();
    const elementRef = useRef<HTMLDivElement>();

    const [alignedClassName, setAlignedClassName] = useState<string>();

    // ======================= Measure ========================
    // const [stretchStyle, measureStretchStyle] = useStretchStyle(stretch);

    // function doMeasure() {
    //   if (stretch) {
    //     measureStretchStyle(getRootDomNode());
    //   }
    // }

    // ======================== Status ========================
    // const [status, goNextStatus] = useVisibleStatus(visible, doMeasure);

    // ======================== Aligns ========================
    /**
     * `alignedClassName` may modify `source` size,
     * which means one time align may not move to the correct position at once.
     *
     * We will reset `alignTimes` for each status switch to `alignPre`
     * and let `rc-align` to align for multiple times to ensure get final stable place.
     * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
     */
    const [alignTimes, setAlignTimes] = useState(0);
    const prepareResolveRef = useRef<(value?: unknown) => void>();

    // useLayoutEffect(() => {
    //   if (status === 'alignPre') {
    //     setAlignTimes(0);
    //   }
    // }, [status]);

    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    function getAlignTarget() {
      if (point) {
        return point;
      }
      return getRootDomNode;
    }

    function forceAlign() {
      alignRef.current?.forceAlign();
    }

    function onInternalAlign(popupDomNode: HTMLElement, matchAlign: AlignType) {
      const nextAlignedClassName = getClassNameFromAlign(matchAlign);

      if (alignedClassName !== nextAlignedClassName) {
        setAlignedClassName(nextAlignedClassName);
      }

      // We will retry multi times to make sure that the element has been align in the right position.
      setAlignTimes((val) => val + 1);

      onAlign?.(popupDomNode, matchAlign);
      // if (status === 'align') {
      // }
    }

    // Delay to go to next status
    useLayoutEffect(() => {
      // Repeat until not more align needed
      if (alignTimes < 2) {
        forceAlign();
      } else {
        // goNextStatus(function () {
        //   prepareResolveRef.current?.();
        // });
      }
    }, [alignTimes]);

    // ======================== Motion ========================
    // const motion = { ...getMotion(props) };
    // ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach((eventName) => {
    //   const originHandler: MotionEndEventHandler = motion[eventName];
    //   motion[eventName] = (element, event) => {
    //     goNextStatus();
    //     return originHandler?.(element, event);
    //   };
    // });

    function onShowPrepare() {
      return new Promise((resolve) => {
        prepareResolveRef.current = resolve;
      });
    }

    // ========================= Refs =========================
    React.useImperativeHandle(ref, () => ({
      forceAlign,
      getElement: () => elementRef.current,
    }));

    const mergedClassName = classNames(className);

    let childNode =<div className={`-content`}>你好啊</div>;

    // Wrapper when multiple children
    if (React.Children.count(children) > 1) {
      childNode = <div className={`-content`}>你好啊</div>;
    }
    // const alignRef = useRef<RefAlign>();

    return (
      <div>
      {/* <RcAlign
        target={getAlignTarget()}
        key="popup"
        ref={alignRef}
        monitorWindowResize
        align={align}
        onAlign={onInternalAlign}
        
        > */}
      <div
        // ref={motionRef}
        className={mergedClassName}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDownCapture={onMouseDown}
        onTouchStartCapture={onTouchStart}
        onClick={onClick}
      >
        {childNode}
      </div>
      {/* </RcAlign> */}
      </div>
    );
  }
);

export default PopupInner;
