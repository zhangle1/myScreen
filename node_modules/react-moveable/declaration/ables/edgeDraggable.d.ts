import { DraggableProps, MoveableGroupInterface, MoveableManagerInterface, Renderer } from "../types";
declare const _default: {
    readonly events: {};
    readonly props: {
        readonly edgeDraggable: BooleanConstructor;
    };
    readonly name: "edgeDraggable";
} & {
    css: string[];
    render(moveable: MoveableManagerInterface<DraggableProps>, React: Renderer): any[];
    dragControlCondition(moveable: MoveableManagerInterface<DraggableProps>, e: any): boolean;
    dragControlStart(moveable: MoveableManagerInterface<DraggableProps>, e: any): false | import("../types").OnDragStart;
    dragControl(moveable: MoveableManagerInterface<DraggableProps>, e: any): import("../types").OnDrag | undefined;
    dragControlEnd(moveable: MoveableManagerInterface<DraggableProps, any>, e: any): import("../types").OnDragEnd | undefined;
    dragGroupControlCondition(moveable: MoveableGroupInterface<DraggableProps>, e: any): boolean;
    dragGroupControlStart(moveable: MoveableGroupInterface<DraggableProps>, e: any): false | import("../types").OnDragStart;
    dragGroupControl(moveable: MoveableGroupInterface<DraggableProps>, e: any): import("../types").OnDragGroup | undefined;
    dragGroupControlEnd(moveable: MoveableGroupInterface<DraggableProps, any>, e: any): any;
    unset(moveable: any): void;
};
export default _default;
/**
 * Whether to move by dragging the edge line (default: false)
 * @name Moveable.Draggable#edgeDraggable
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *  draggable: true,
 *  edgeDraggable: false,
 * });
 *
 * moveable.edgeDraggable = true;
 */
