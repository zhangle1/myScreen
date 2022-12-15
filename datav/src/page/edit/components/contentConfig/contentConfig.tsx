import * as React from "react";
import styled from "styled-components/macro";
import Ruler from "../../../../components/ruler/ruler";
import useEditScreenElementSize from "./hooks/useEditScreenElementSize";
import classNames from "classnames";
import { usePointStyle } from "./hooks/useStyle";

import Moveable from "react-moveable";
import { Rnd, Props } from "react-rnd";
import { Button } from "antd";
import { FC, MouseEventHandler, ReactNode, useCallback, useState } from "react";
import { json } from "stream/consumers";
import { createMockCompontent } from "../../package/Components";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectBoard } from "../../../../app/slice/boardSlice";
import { getJsonConfigs } from "../../../../util";
import {
  selecteditBoard,
  updateWidget,
} from "../../../../app/childSlice/stackSlice";
import { WidgetWrapper } from "../widgetWrapper/widgetWrapper";
import { WidgetOperation } from "../widgetWrapper/widgetWrapper";
import produce from "immer";
import useBoardMouseListener, {
  WrapperEvent,
} from "./hooks/useBoardMouseListener";

interface ComponmentProps {
  left?: number;
  top?: number;
  width: number;
  height: number;
}

const ContentConfig = (props: any) => {
  //  const board= useAppSelector(selectBoard)
  const editBoard = useAppSelector(selecteditBoard);
  const dispatch = useAppDispatch();

  //  editBoard.widgetRecord
  const [width, height] = getJsonConfigs(
    editBoard.dashBoard.config.jsonConfig,
    ["size"],
    ["width", "height"]
  );

  // const screenClient = {
  //   width: 1000,
  //   height: 1000,
  // };

  const [chartCompontents, setChartCompontents] = useState(
    createMockCompontent()
  );

  const [contentLoading, SeContentLoading] = useState(true);

  const [
    editRef,
    { rulerHeight, rulerWidth, scale, screenHeight, screenWidth },
  ] = useEditScreenElementSize(
    {
      ScreenHeight: height,
      ScreenWidth: width,
    },
    () => {
      SeContentLoading(false);
    }
  );

  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  var mouseOver = (wrapperEvent) => {


    var isSelected = null;

    var clientX = wrapperEvent.clientX - ref?.getBoundingClientRect().left;
    var clientY = wrapperEvent.clientY - ref?.getBoundingClientRect().top;

    var list = Object.entries(editBoard.widgetRecord).filter(
      ([key, value], index) => {
        console.log(
          "参数查看:" +
            "clientX:" +
            (clientX)+
            "X左:" +
            value.config.rect.x+
            "宽度:" +
            (value.config.rect.width )+
            "伸缩率"+
            scale
        );
        return (
          (clientX/scale)>= value.config.rect.x &&
          (clientX/scale) <= (value.config.rect.x + value.config.rect.width)  &&
          (clientY/scale) >= value.config.rect.y  &&
          (clientY/scale )<= (value.config.rect.y + value.config.rect.height) 
        );
      }
    );
    
    if(list.length>0){
      console.log("数组的list:" + list[0][0]);
    }
  };

  const { mouseMove } = useBoardMouseListener((wrapperEvent: WrapperEvent) => {
    console.log(
      "包裹的事件: left:" +
        (wrapperEvent.event.clientX - ref?.clientLeft) +
        "top:+" +
        (wrapperEvent.event.clientY - ref?.clientTop)
    );
    console.log("ref:clientLeft:" + ref?.clientLeft);
  });

  function ComponmentMouseDown(event) {
    console.log("ComponmentMouseDown:触发");
    console.log(event);
  }

  return (
    <Wrapper
      contentWidth={screenWidth}
      contentHeight={screenHeight}
      scale={scale}
    >
      <div className="content-edit-wrapper">
        <div
          ref={editRef}
          className="contont-edit-main"
          // onMouseDown={MouseDown}
          // onDrop={drop}
          // onDragOver={dragOver}
          // onDragEnter={dragEnter}
        >
          {/* <div className="content-edit-main-scale"> */}
          {/* <div>  宽度{editWidth} 高度 {editHeight}  屏幕编辑区域宽度{screen.width}  屏幕编辑区伸缩后宽度{editWidth}  屏幕编辑区域高度{editHeight}  屏幕编辑区伸缩后高度{screen.height*screen.scale}伸缩率{screen.scale}</div> */}
          <Ruler
            height={30}
            left={30}
            width={rulerWidth}
            zoom={scale}
            min={0}
            scaleLineStyle={{
              shortLength: 5,
              mediumLength: 7,
              longLength: 70,
            }}
            textFormat={(val: number) => {
              return `${val}px`;
            }}
          />
          <Ruler
            height={rulerHeight}
            top={30}
            width={30}
            zoom={scale}
            horizontal={false}
            min={0}
            scaleLineStyle={{
              shortLength: 5,
              mediumLength: 7,
              longLength: 70,
            }}
            textFormat={(val: number) => {
              return `${val}px`;
            }}
          />

          <div
            className="content-edit-main-content"
            ref={setRef}
            onMouseMove={mouseOver}
          >
            {/* <ShapeBoxWrapper
              left={chartContent.left}
              top={chartContent.top}
              onMouseDown={ComponmentMouseDown}
            >
   
              {createPointList()}
            </ShapeBoxWrapper> */}
            {/* <Button>你好啊</Button> */}
            {!contentLoading ? (
              Object.entries(editBoard.widgetRecord).map(
                ([key, value], inedx) => {
                  return (
                    <WidgetWrapper
                      key={key}
                      widget={value}
                      scale={scale}
                      onDragOrResizeAction={(
                        WidgetOperation: WidgetOperation
                      ) => {
                        console.log(
                          "drag:" +
                            "x:" +
                            WidgetOperation.newRect.x +
                            "y:" +
                            WidgetOperation.newRect.y +
                            "width:" +
                            WidgetOperation.newRect.width +
                            "height:" +
                            WidgetOperation.newRect.height
                        );

                        const newState = produce(value, (draft) => {
                          draft.config.rect = WidgetOperation.newRect;
                        });
                        dispatch(updateWidget(newState));
                      }}
                    ></WidgetWrapper>
                  );
                }
              )
            ) : (
              <></>
            )}
            {/* <Moveable flushSync={flushSync} /> */}
          </div>
        </div>

        <div className="content-edit-bottom"></div>
      </div>
      <div className="content-configuration-container"></div>
    </Wrapper>
  );
};

export default ContentConfig;
const ShapeBoxWrapper = styled.div<ComponmentProps>`
  position: absolute;
  cursor: move;
  z-index: 1;
  left: ${(p) => p.left}px;
  top: ${(p) => p.top}px;
`;

const Wrapper = styled.div<{
  contentWidth: number;
  contentHeight: number;
  scale: number;
}>`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);

  .content-edit-wrapper {
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 100%;
    .contont-edit-main {
      position: relative;
      flex: 1;
      width: 100%;
      background-image: linear-gradient(#fafafc 14px, transparent 0),
        linear-gradient(90deg, transparent 14px, #373739 0);
      background-size: 15px 15px, 15px 15px;
      /* background-image: linear-gradient(#fafafc 14px, transparent 0), linear-gradient(90deg, transparent 14px, #373739 0); */
      /* background-color: #fafafc; */
      /* background: gray; */
      width: 100%;
      height: 100%;
      overflow: scroll;

      /* .content-edit-main-scale{
        position: absolute;
        background: gray;
        width: 100%;
        height: 100%;
        overflow: scroll; */

      .content-edit-main-content {
        /* margin-left: 30px;
        margin-top: 30px; */
        top: 30px;
        left: 30px;
        position: absolute;
        height: ${(p) => p.contentHeight}px;
        width: ${(p) => p.contentWidth}px;
        transform-origin: left top;
        transform: scale(${(p) => p.scale});
        overflow: hidden;
        background-color: #f2f3f5;
        border-radius: 10px;
        box-shadow: 0 8px 10px rgb(0 0 0 / 7%);
      }

      .testComponment {
      }
    }

    /* } */

    .content-edit-bottom {
      width: 100%;
      height: 40px;
    }
  }

  .content-configuration-container {
    width: 300px;
    height: 100%;
  }
`;
