import { createSlice } from "@reduxjs/toolkit";
import { ChartDataViewFieldCategory, ChartStyleSectionComponentType, DataViewFieldType } from "../constants";
import { RootState } from "../store";
import { BoardConfig } from "../types/config/boardType";


export interface  BoardState {
    boardConfig:BoardConfig
}

const initialState: BoardState = {
    boardConfig :{
        version:'1.0.0',
        type:'free',
        jsonConfig:[
            {
                label:'页面长宽',
                key:'size',
                comType:ChartStyleSectionComponentType.GROUP,
                rows:[{
                    label:'宽度',
                    key:'width',
                    default:1800,
                    comType:ChartStyleSectionComponentType.INPUT_NUMBER
                },
                {
                    label:'高度',
                    key:'height',
                    default:1000,
                    comType:ChartStyleSectionComponentType.INPUT_NUMBER
                }
            ]
            }
        ]
    }
}

export const boardSlice= createSlice({
    name:"board",
    initialState,
    reducers:{

    }
})

export const {} =boardSlice.actions

export const selectBoard = (state: RootState) =>state.board


export default boardSlice.reducer;
