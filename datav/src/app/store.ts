import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import layoutReducer from './slice/layoutSlice'
import boardReducer from './slice/boardSlice'
import editBoardReducer from './childSlice/stackSlice'
import widgetInfoRecordReducer from './slice/index'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    board:boardReducer,
    editBoard:editBoardReducer,
    widgetInfo:widgetInfoRecordReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;