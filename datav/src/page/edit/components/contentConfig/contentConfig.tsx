import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useElementSize } from "usehooks-ts";
import Ruler from "../../../../components/ruler/ruler";

export function ContentConfig() {
  const screenClient = {
    width: 500,
    height: 2200,
  };

  const [editRef, { width: editWidth, height: editHeight }] = useElementSize();
  var initScale=1
  var rulerWidth=0
  var rulerHeight=0
  var scaleWidth = (editWidth) / screenClient.width;
  var scaleHeight = (editHeight) / screenClient.height;
  if (scaleHeight >= 1 && scaleWidth >= 1) {
    rulerWidth=editWidth
    rulerHeight=editHeight
  } else if (scaleWidth > scaleHeight) {
    initScale=(editHeight) / screenClient.height
    if(scaleHeight>=1){
      rulerHeight=editHeight
    }else{
      rulerHeight=screenClient.height
    }
    if(scaleWidth>=1){
      rulerWidth=editWidth
    }else{
      rulerWidth=screenClient.width
    }
  } else {
    initScale=(editHeight) / screenClient.height
    if(scaleHeight>=1){
      rulerHeight=editHeight
    }else{
      rulerHeight=screenClient.height
    }
    if(scaleWidth>=1){
      rulerWidth=editWidth
    }else{
      rulerWidth=screenClient.width
    }
  }

  const [screen, setScreen] = useState({
    width: screenClient.width,
    height: screenClient.height,
    scale: initScale,
    rulerWidth:rulerWidth,
    rulerHeight:rulerHeight
  });
  // changeScreen();
  useEffect(() => {
      changeScreen();
      console.log("刷新触发了")
  }, [editWidth,editHeight]);

  function changeScreen() {
    var scaleWidth = (editWidth) / screen.width;
    var scaleHeight = (editHeight) / screen.height;
    var scale = 1;
    var rulerWidth=0
    var rulerHeight=0
    if (scaleWidth >= 1 && scaleHeight >= 1) {
      setScreen({
        width: screenClient.width,
        height: screenClient.height,
        scale: scale,
        rulerWidth:editWidth-40,
        rulerHeight:editHeight-40
      });
    } else if (scaleWidth > scaleHeight) {

      if(scaleHeight>=1){
        rulerHeight=editHeight-40
      }else{
        rulerHeight=screenClient.height*scaleHeight
      }
      if(scaleWidth>=1){
        rulerWidth=editWidth-40
      }else{
        rulerWidth=screenClient.width*scaleWidth
      }


      setScreen({
        width: screenClient.width,
        height: screenClient.height,
        scale: scaleHeight,
        rulerWidth:rulerWidth,
        rulerHeight:rulerHeight
      });
    } else {
      if(scaleHeight>=1){
        rulerHeight=editHeight-40
      }else{
        rulerHeight=screenClient.height*scaleHeight
      }
      if(scaleWidth>=1){
        rulerWidth=editWidth-40
      }else{
        rulerWidth=screenClient.width*scaleWidth
      }

      setScreen({
        width: screenClient.width,
        height: screenClient.height,
        scale: scaleWidth,
        rulerWidth:rulerWidth,
        rulerHeight:rulerHeight
      });
    }
  }
  return (
    <Wrapper contentWidth={screen.width}  contentHeight={screen.height} 
        scale={screen.scale}
    >
      <div className="content-edit-wrapper">
        <div ref={editRef}  className="contont-edit-main">
        {/* <div className="content-edit-main-scale"> */}
           {/* <div>  宽度{editWidth} 高度 {editHeight}  屏幕编辑区域宽度{screen.width}  屏幕编辑区伸缩后宽度{editWidth}  屏幕编辑区域高度{editHeight}  屏幕编辑区伸缩后高度{screen.height*screen.scale}伸缩率{screen.scale}</div> */}
           <Ruler
        height={30}
        left={30}
        width={screen.rulerWidth}
        zoom={screen.scale}
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
        height={screen.rulerHeight}
        top={30}
        width={30}
        zoom={screen.scale}
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
      background-image: linear-gradient(#fafafc 14px, transparent 0), linear-gradient(90deg, transparent 14px, #373739 0);
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
        height: ${p=>p.contentHeight}px;
        width: ${p=>p.contentWidth}px;
        transform-origin: left top;
        transform: scale(${p=>p.scale});

        background-color: #f2f3f5;    
        border-radius: 10px;
        box-shadow: 0 8px 10px rgb(0 0 0 / 7%);
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
