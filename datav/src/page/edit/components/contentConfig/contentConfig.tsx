import * as React from "react";
import styled from "styled-components/macro";
import Ruler from "../../../../components/ruler/ruler";
import useEditScreenElementSize from "./hooks/useEditScreenElementSize";
import classNames from "classnames";
import { usePointStyle } from "./hooks/useStyle";

import Moveable from "react-moveable";
import { Rnd, Props } from "react-rnd";
import { Button } from "antd";
import { FC, ReactNode, useState } from "react";
import { json } from "stream/consumers";
import { createMockCompontent } from "../../package/Components";
import { useAppSelector } from "../../../../app/hooks";
import { selectBoard } from "../../../../app/slice/boardSlice";
import { getJsonConfigs } from "../../../../util";

interface ComponmentProps {
  left?: number;
  top?: number;
  width: number;
  height: number;
}

const ContentConfig = (props: any) => {

   const board= useAppSelector(selectBoard)
   const [width, height] = getJsonConfigs(board.boardConfig.jsonConfig, ['size'], ['width', 'height']);

  // console.log("从Json获取到的属性width:"+width+"height:"+height);


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

  function handleEvent(event) {
    console.log(event);
  }
  function MouseDown(event) {
    console.log("handleMouseDown:触发");
    console.log(event);
  }
  function drop(event) {
    console.log("drop:触发");
    console.log(event);
  }
  function dragOver(event) {
    console.log("dragOver:触发");
    console.log(event);
  }

  function dragEnter(event) {
    console.log("dragEnter:触发");
    console.log(event);
  }

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
          onMouseDown={MouseDown}
          onDrop={drop}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
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

          <div className="content-edit-main-content" onMouseDown={handleEvent}>
            {/* <ShapeBoxWrapper
              left={chartContent.left}
              top={chartContent.top}
              onMouseDown={ComponmentMouseDown}
            >
   
              {createPointList()}
            </ShapeBoxWrapper> */}
            {/* <Button>你好啊</Button> */}
            {!contentLoading ? (
              chartCompontents.map((src, index) => {
                return (
                  <Rnd
                    key={index}
                    style={{
                      display: "flex",
                      // alignItems: "center",
                      // justifyContent: "center",
                      border: "solid 1px #ddd",
                      background: "#f0f0f0",
                    }}
                    size={{
                      height: src.height,
                      width: src.width,
                    }}
                    position={{
                      x: src.left,
                      y: src.top,
                    }}
                    onDragStop={(e, d) => {
                      const newChartCompontents = [...chartCompontents];

                      newChartCompontents[index] = {
                        top: d.y,
                        left: d.x,
                        width: src.width,
                        height: src.height,
                      };
                      setChartCompontents(newChartCompontents);
                    }}
                    onResize={(e, direction, ref, delta, position) => {
                      const newChartCompontents = [...chartCompontents];

                      newChartCompontents[index] = {
                        top: position.y,
                        left: position.x,
                        width: ref.offsetWidth,
                        height: ref.offsetHeight,
                      };

                      setChartCompontents(newChartCompontents);
                    }}
                  >
                    <TestWrapper
                      width={src.width}
                      height={src.height}
                      left={src.left}
                      top={src.top}
                    >
                      {/* y:{src.top}x:{src.left} 高:{src.height}宽:{src.width} */}
                    </TestWrapper>
                  </Rnd>
                );
              })
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

const ShapePointWrapper = styled.div<{ left: number; top: number }>`
  z-index: 1;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid #51d6a9;
  left: ${(p) => p.left}px;
  top: ${(p) => p.top}px;
  border-radius: 8px;
  background-color: #fff;
  transform: translate(-40%, -30%);
  &.t {
    width: 60px;
    transform: translate(-50%, -50%);
  }
  &.b {
    width: 60px;
    transform: translate(-50%, -50%);
  }
  &.l,
  &.r {
    height: 60px;
  }
  &.r {
    transform: translate(-20%, -50%);
  }
  &.l {
    transform: translate(-45%, -50%);
  }
  &.rt,
  &.rb {
    transform: translate(-30%, -30%);
  }
`;

const TestWrapper = styled.div<{
  width: number;
  height: number;
  top: number;
  left: number;
}>`
  position: absolute;
  /* left: ${(p) => p.left}px;
        top: ${(p) => p.top}px; */
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background-color: red;
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
