import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum LayoutStoreEnum {
  LAYERS = "layers",
  CHARTS = "charts",
  DETAILS = "details",
}

export interface LayoutState {
  [LayoutStoreEnum.LAYERS]: boolean;
  [LayoutStoreEnum.CHARTS]: boolean;
  [LayoutStoreEnum.DETAILS]: boolean;
}

const initialState: LayoutState = {
  layers: true,
  charts: true,
  details: true,
};

export interface ToggleAction {
  type: string;
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleContainer: (state, action: PayloadAction<ToggleAction>) => {
      state[action.payload.type] = !state[action.payload.type];
    },
  },
});

export const { toggleContainer } = layoutSlice.actions;

export const selectLayout = (state: RootState) =>state.layout

export default layoutSlice.reducer;


