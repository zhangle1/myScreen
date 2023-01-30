import { ScrollableProps, MoveableManagerInterface, MoveableGroupInterface } from "../types";
declare const _default: {
    name: string;
    canPinch: boolean;
    props: {
        readonly scrollable: BooleanConstructor;
        readonly scrollContainer: ObjectConstructor;
        readonly scrollThreshold: NumberConstructor;
        readonly getScrollPosition: FunctionConstructor;
    };
    events: {
        readonly onScroll: "scroll";
        readonly onScrollGroup: "scrollGroup";
    };
    dragRelation: string;
    dragStart(moveable: MoveableManagerInterface<ScrollableProps>, e: any): void;
    checkScroll(moveable: MoveableManagerInterface<ScrollableProps>, e: any): true | undefined;
    drag(moveable: MoveableManagerInterface<ScrollableProps>, e: any): true | undefined;
    dragEnd(moveable: MoveableManagerInterface<ScrollableProps>, e: any): void;
    dragControlStart(moveable: MoveableManagerInterface<ScrollableProps>, e: any): void;
    dragControl(moveable: MoveableManagerInterface<ScrollableProps>, e: any): true | undefined;
    dragControlEnd(moveable: MoveableManagerInterface<ScrollableProps>, e: any): void;
    dragGroupStart(moveable: MoveableGroupInterface, e: any): void;
    dragGroup(moveable: MoveableGroupInterface, e: any): true | undefined;
    dragGroupEnd(moveable: MoveableGroupInterface, e: any): void;
    dragGroupControlStart(moveable: MoveableGroupInterface, e: any): void;
    dragGroupContro(moveable: MoveableGroupInterface, e: any): true | undefined;
    dragGroupControEnd(moveable: MoveableGroupInterface, e: any): void;
};
/**
 * @namespace Moveable.Scrollable
 * @description Whether or not target can be scrolled to the scroll container (default: false)
 */
export default _default;
/**
 * Whether or not target can be scrolled to the scroll container (default: false)
 * @name Moveable.Scrollable#scrollable
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   scrollable: true,
 *   scrollContainer: document.body,
 *   scrollThreshold: 0,
 *   getScrollPosition: ({ scrollContainer }) => ([scrollContainer.scrollLeft, scrollContainer.scrollTop]),
 * });
 *
 * moveable.scrollable = true;
 */
/**
 * The container to which scroll is applied (default: container)
 * @name Moveable.Scrollable#scrollContainer
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   scrollable: true,
 *   scrollContainer: document.body,
 *   scrollThreshold: 0,
 *   getScrollPosition: ({ scrollContainer }) => ([scrollContainer.scrollLeft, scrollContainer.scrollTop]),
 * });
 */
/**
 * Expand the range of the scroll check area. (default: 0)
 * @name Moveable.Scrollable#scrollThreshold
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   scrollable: true,
 *   scrollContainer: document.body,
 *   scrollThreshold: 0,
 *   getScrollPosition: ({ scrollContainer }) => ([scrollContainer.scrollLeft, scrollContainer.scrollTop]),
 * });
 */
/**
 * Sets a function to get the scroll position. (default: Function)
 * @name Moveable.Scrollable#getScrollPosition
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   scrollable: true,
 *   scrollContainer: document.body,
 *   scrollThreshold: 0,
 *   getScrollPosition: ({ scrollContainer }) => ([scrollContainer.scrollLeft, scrollContainer.scrollTop]),
 * });
 *
 */
/**
 * When the drag cursor leaves the scrollContainer, the `scroll` event occur to scroll.
 * @memberof Moveable.Scrollable
 * @event scroll
 * @param {Moveable.Scrollable.OnScroll} - Parameters for the `scroll` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: document.querySelector(".target"),
 * });
 * moveable.on("scroll", ({ scrollContainer, direction }) => {
 *   scrollContainer.scrollLeft += direction[0] * 10;
 *   scrollContainer.scrollTop += direction[1] * 10;
 * });
 */
/**
 * When the drag cursor leaves the scrollContainer, the `scrollGroup` event occur to scroll in group.
 * @memberof Moveable.Scrollable
 * @event scrollGroup
 * @param {Moveable.Scrollable.OnScrollGroup} - Parameters for the `scrollGroup` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: [].slice.call(document.querySelectorAll(".target")),
 * });
 * moveable.on("scroll", ({ scrollContainer, direction }) => {
 *   scrollContainer.scrollLeft += direction[0] * 10;
 *   scrollContainer.scrollTop += direction[1] * 10;
 * });
 */
