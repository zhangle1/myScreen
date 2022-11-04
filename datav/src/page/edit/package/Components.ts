

export interface Components {
    left?: number;
    top?: number;
    width: number;
    height: number;
}


export function createMockCompontent(){
    const mockCompontent=[] as Components[]

    for(var i=0;i<2;i++){
        mockCompontent.push({
            left:Math.random()*400,
            top:Math.random()*400,
            width:200,
            height:200,
        })
    }

    return mockCompontent
}