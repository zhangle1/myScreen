import { MoveableClientRect } from "../types";
import { MoveableElementInfo } from "./getElementInfo";
export interface MoveableTargetInfo extends MoveableElementInfo {
    targetClientRect: MoveableClientRect;
    containerClientRect: MoveableClientRect;
    moveableClientRect: MoveableClientRect;
    rootContainerClientRect: MoveableClientRect;
    beforeDirection: 1 | -1;
    beforeOrigin: number[];
    originalBeforeOrigin: number[];
    target: HTMLElement | SVGElement | null | undefined;
}
export declare function getMoveableTargetInfo(moveableElement?: HTMLElement | null, target?: HTMLElement | SVGElement | null, container?: HTMLElement | SVGElement | null, parentContainer?: HTMLElement | SVGElement | null, rootContainer?: HTMLElement | SVGElement | null): MoveableTargetInfo;
