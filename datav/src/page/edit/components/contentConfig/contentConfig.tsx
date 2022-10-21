import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useElementSize } from "usehooks-ts";

export function ContentConfig() {
  const screenClient = {
    width: 1920,
    height: 1600,
  };

  const [editRef, { width: editWidth, height: editHeight }] = useElementSize();

  const [screen, setScreen] = useState({
    width: 1920,
    height: 1600,
    scale: 1,
  });

  useEffect(() => {
      var scaleWidth=  (editWidth-50)/screen.width
      var scaleHeight= (editHeight-50)/ screen.height
      var scale=1
      if(scaleWidth>=1&&scaleHeight>=1){
        setScreen({    width: 1920,
            height: 1600,
            scale: scale,})
      }else if(scaleWidth>scaleHeight){
        setScreen({    width: 1920,
            height: 1600,
            scale: scaleHeight,})
      }else{
        setScreen({    width: 1920,
            height: 1600,
            scale: scaleWidth,})
      }

  }, [editWidth,editHeight]);

  return (
    <Wrapper contentWidth={screen.width*screen.scale}  contentHeight={screen.height*screen.scale} >
      <div className="content-edit-wrapper">
        <div ref={editRef}  className="contont-edit-main">
           <div>  宽度{editWidth} 高度 {editHeight}  屏幕编辑区域宽度{screen.width}  屏幕编辑区伸缩后宽度{screen.width*screen.scale}  屏幕编辑区域高度{screen.height}  屏幕编辑区伸缩后高度{screen.height*screen.scale}伸缩率{screen.scale}</div>
          <div className="content-edit-main-content"></div>
        </div>
        <div className="content-edit-bottom"></div>
      </div>
      <div className="content-configuration-container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ contentWidth: number; contentHeight: number }>`
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
      background: gray;
      overflow: scroll;
      .content-edit-main-content {
        /* margin-left: 30px;
        margin-top: 30px; */
        top: 30px;
        left: 30px;
        position: absolute;
        height: ${p=>p.contentHeight}px;
        width: ${p=>p.contentWidth}px;
        background: red;
      }
    }

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
