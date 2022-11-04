import { useCallback, useState } from 'react'

import {useEventListener,useIsomorphicLayoutEffect} from "usehooks-ts"


interface  ScreenProps{
    ScreenWidth: number,
    ScreenHeight: number,
}

interface ScreenOutPut{
    scale: number,
    rulerWidth: number,
    rulerHeight:number,
    screenWidth: number,
    screenHeight: number
}

function useEditScreenElementSize<T extends HTMLElement = HTMLDivElement>(props:ScreenProps,
  onContentChange:Function
  ):[
    (node: T | null) => void,
    ScreenOutPut,
]{

    const [ref, setRef] = useState<T | null>(null)
    const [screen, setScreen] = useState<ScreenOutPut>({
        scale: 0,
        rulerWidth: 0,
        rulerHeight:0,
        screenWidth:0,
        screenHeight:0,
      })


  // Prevent too many rendering using useCallback
    const handleScreenSize = useCallback(()=>{
        
        var scaleWidth = (ref?.offsetWidth-50)/(props.ScreenWidth) ;
        var scaleHeight =(ref?.offsetHeight-50)/ (props.ScreenHeight) ;
        var scale = 1;
        var rulerWidth=0
        var rulerHeight=0
        if (scaleWidth >= 1 && scaleHeight >= 1) {
            setScreen({
            screenWidth: props.ScreenWidth,
            screenHeight: props.ScreenHeight,
            scale: scale,
            rulerWidth:ref?.offsetWidth-50,
            rulerHeight:ref?.offsetHeight-50
          });
        } else if (scaleWidth > scaleHeight) {
    
          if(scaleHeight>=1){
            rulerHeight= ref?.offsetHeight-50
          }else{
            rulerHeight=(props.ScreenHeight)*scaleHeight
          }
          if(scaleWidth>=1){
            rulerWidth=ref?.offsetWidth-50
          }else{
            rulerWidth=(props.ScreenWidth)*scaleWidth
          }
    
    
          setScreen({
            screenWidth: props.ScreenWidth,
            screenHeight:props.ScreenHeight,
            scale: scaleHeight,
            rulerWidth:rulerWidth,
            rulerHeight:rulerHeight
          });
        } else {
          if(scaleHeight>=1){
            rulerHeight=ref?.offsetHeight-50
          }else{
            rulerHeight=(props.ScreenHeight)*scaleHeight
          }
          if(scaleWidth>=1){
            rulerWidth=ref?.offsetWidth-50
          }else{
            rulerWidth=(props.ScreenWidth)*scaleWidth
          }
    
          setScreen({
            screenWidth: props.ScreenWidth,
            screenHeight: props.ScreenHeight,
            scale: scaleWidth,
            rulerWidth:rulerWidth,
            rulerHeight:rulerHeight
          });
        }




    },[ref?.offsetHeight||0,ref?.offsetWidth||0,props.ScreenHeight])

    useEventListener('resize',handleScreenSize)

    useIsomorphicLayoutEffect(() => {
        console.log("触发了几次")
        handleScreenSize()
        onContentChange()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [ref?.offsetHeight, ref?.offsetWidth])



    return [setRef,screen]
}


export default useEditScreenElementSize