import styled from "@emotion/styled";

type TopMenuContainer ={
    height?:string;
    width?:string;
    background?:string;
}


export const TopMenuContainer= styled.div<TopMenuContainer>`
    height: ${props=>props.height};
    width: ${props=>props.width};
    background:${props=>props.background};
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
`