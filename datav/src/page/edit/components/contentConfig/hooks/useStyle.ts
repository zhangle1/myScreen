interface PointProps {
  point: string;
  index: number;
  width: number;
  height: number;
}

export const usePointStyle = function (props: PointProps) {
  const { point, index, width, height } = props;

  const isTop = /t/.test(point);
  const isBottom = /b/.test(point);
  const isLeft = /l/.test(point);
  const isRight = /r/.test(point);

  let newLeft = 0
  let newTop = 0

  function isNegativeToZero(n: number){
     if(n<=0){
      return 0
     }else{
      return n
     }
  }
  
  // 四个角的点
    if (point.length === 2) {
        newLeft = isLeft ? 0 :isNegativeToZero((width-5))
        newTop = isTop ? 0 : isNegativeToZero((height-5))
      } else {
        // 上下两点的点，宽度居中
        if (isTop || isBottom) {
          newLeft = width / 2
          newTop = isTop ? 0 : (height)
        }
    
        // 左右两边的点，高度居中
        if (isLeft || isRight) {
          newLeft = isLeft ? 0 :isNegativeToZero(width-5)
          newTop = Math.floor(height / 2)
        }
      }
    
      const style = {
        left: newLeft,
        top: newTop,
        // cursor: cursorResize[index] + '-resize'
      }
    
      return style
};
