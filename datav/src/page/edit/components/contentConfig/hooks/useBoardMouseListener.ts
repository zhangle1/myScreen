import React, { MouseEventHandler } from "react";

export  interface WrapperEvent{
    type:'mouseMove',
    event:React.MouseEvent<HTMLDivElement,MouseEvent>
} 


function useBoardMouseListener(fn:Function) {

  

  const mouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    fn?.({type:'mouseMove',event:event})
  };

  return { mouseMove };
}

export default useBoardMouseListener;
