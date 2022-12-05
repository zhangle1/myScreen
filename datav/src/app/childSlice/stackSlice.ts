import { createSlice } from "@reduxjs/toolkit";
import uuid from "../../uuid";
import { ChartStyleSectionComponentType } from "../constants";
import { EditBoardStack } from "../slice/type";
import { RootState } from "../store";
import { WidgetConf, WidgetType } from "../types/config/widgetType";
import { Dashboard } from "../types/info/types";

export type updateWidgetConf = {
  id: string;
  config: WidgetConf;
};

export const initEditBoardState: EditBoardStack = {
  dashBoard: {
    id: uuid(),
    config: {
      version: "1.0.0",
      type: "free",
      jsonConfig: [
        {
          label: "页面长宽",
          key: "size",
          comType: ChartStyleSectionComponentType.GROUP,
          rows: [
            {
              label: "宽度",
              key: "width",
              default: 1800,
              comType: ChartStyleSectionComponentType.INPUT_NUMBER,
            },
            {
              label: "高度",
              key: "height",
              default: 1000,
              comType: ChartStyleSectionComponentType.INPUT_NUMBER,
            },
          ],
        },
      ],
    },
  } as Dashboard,
  widgetRecord: {
    a: {
      id: uuid(),
      config: {
        index: 0,
        version: "1.0.0",
        type: "chart",
        customConfig: {},
        rect: {
          x: 100,
          y: 100,
          width: 200,
          height: 200,
        },
      },
    },
    b: {
      id: uuid(),
      config: {
        index: 0,
        version: "1.0.0",
        type: "chart",
        customConfig: {},
        rect: {
          x: 300,
          y: 300,
          width: 200,
          height: 200,
        },
      },
    },
  },
};

export const editBoardStackSlice = createSlice({
  name: "editBoard",
  initialState: initEditBoardState,
  reducers: {},
  extraReducers: (builder) => {},
});


export const {} = editBoardStackSlice.actions
export const selecteditBoard = (state: RootState) =>state.editBoard

export default editBoardStackSlice.reducer;


