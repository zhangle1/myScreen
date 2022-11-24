import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import layoutReducer from './slice/layoutSlice'
import boardReducer from './slice/boardSlice'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    board:boardReducer,
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