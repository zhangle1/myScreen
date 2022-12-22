import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { editBoardStackSlice } from '../childSlice/stackSlice';
import { RootState } from '../store';
import { WidgetInfo } from '../types/info/types';
import { EditBoardState } from './type';



const widgetInfoRecordSlice= createSlice({
    name:'editBoard',
    initialState:{} as EditBoardState['widgetInfoRecord'],
    reducers:{
        selectWidget(
            state,
            action:PayloadAction<{
                id:string;
                selected:boolean;
            }>,
        ){
            const { id, selected, } = action.payload;
            for(let key of Object.keys(state)){
                if(key===id){
                state[id].selected=selected
                }else{
                    state[key].selected=false;
                }
            }
        },
        addWidgetInfos(state, action: PayloadAction<WidgetInfo[]>) {
            const widgetInfos = action.payload;
            widgetInfos.forEach(info => {
              state[info.id] = info;
            });
          },
    }
})


export const {selectWidget,addWidgetInfos} =widgetInfoRecordSlice.actions
export const selectWidgetInfo = (state: RootState) => state.widgetInfo;

export default widgetInfoRecordSlice.reducer