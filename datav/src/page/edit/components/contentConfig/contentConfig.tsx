import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useElementSize } from "usehooks-ts";

export function ContentConfig() {
  const screenClient = {
    width: 800,
    height: 1600,
  };

  const [editRef, { width: editWidth, height: editHeight }] = useElementSize();

  const [screen, setScreen] = useState({
    width: 1920,
    height: 1600,
    scale: 1,
  });

  useEffect(() => {
      var scaleWidth=  (editWidth)/screen.width
      var scaleHeight= (editHeight)/ screen.height
      var scale=1
      if(scaleWidth>=1&&scaleHeight>=1){
        setScreen({    width: screenClient.width,
            height: screenClient.height,
            scale: scale,})
      }else if(scaleWidth>scaleHeight){
        setScreen({    width: screenClient.width,
            height: screenClient.height,
            scale: scaleHeight,})
      }else{
        setScreen({    width: screenClient.width,
            height: screenClient.height,
            scale: scaleWidth,})
      }

  }, [editWidth,editHeight,screenClient.width]);

  return (
    <Wrapper contentWidth={screen.width-80/screen.scale}  contentHeight={screen.height-50/screen.scale} 
        scale={screen.scale}
    >
      <div className="content-edit-wrapper">
        <div ref={editRef}  className="contont-edit-main">
        {/* <div className="content-edit-main-scale"> */}
           <div>  宽度{editWidth} 高度 {editHeight}  屏幕编辑区域宽度{screen.width}  屏幕编辑区伸缩后宽度{editWidth}  屏幕编辑区域高度{editHeight}  屏幕编辑区伸缩后高度{screen.height*screen.scale}伸缩率{screen.scale}</div>
          <div className="content-edit-main-content"></div>
          {/* </div> */}
      
        </div>
        <div className="content-edit-bottom"></div>
      </div>
      <div className="content-configuration-container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ contentWidth: number; contentHeight: number,scale: number }>`
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
        height: ${p=>p.contentHeight}px;
        width: ${p=>p.contentWidth}px;
        transform-origin: left top;
        transform: scale(${p=>p.scale});

        background: red;
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
