export interface MoveableElementMatrixInfo {
    hasFixed: boolean;
    rootMatrix: number[];
    beforeMatrix: number[];
    offsetMatrix: number[];
    allMatrix: number[];
    targetMatrix: number[];
    transformOrigin: number[];
    targetOrigin: number[];
    is3d: boolean;
    targetTransform: string;
    offsetContainer: HTMLElement | null;
    offsetRootContainer: HTMLElement | null;
}
export declare function calculateMatrixStack(target: SVGElement | HTMLElement, container?: SVGElement | HTMLElement | null, rootContainer?: SVGElement | HTMLElement | null | undefined, isAbsolute3d?: boolean): MoveableElementMatrixInfo;
