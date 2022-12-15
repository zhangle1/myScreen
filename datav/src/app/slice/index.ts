import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { editBoardStackSlice } from '../childSlice/stackSlice';
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
        }
    }

})