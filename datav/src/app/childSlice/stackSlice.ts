import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import widgetManager from "../../page/utils/WidgetManager";
import uuid from "../../uuid";
import { ChartStyleSectionComponentType } from "../constants";
import { EditBoardStack } from "../slice/type";
import { RootState } from "../store";
import { Widget, WidgetConf, WidgetType } from "../types/config/widgetType";
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
  widgetRecord: {},
};

export const editBoardStackSlice = createSlice({
  name: "editBoard",
  initialState: initEditBoardState,
  reducers: {
    addWidgets(state, action: PayloadAction<Widget[]>) {
      const widgets = action.payload; 
      const board = state.dashBoard;
      const { type } = board.config;
      let maxWidgetIndex = 0;

      const widgetList = Object.values(state.widgetRecord || {});
      if (widgetList.length) {
        maxWidgetIndex = widgetList
          .map((w) => w.config.index)
          .sort((b, a) => a - b)[0];
      }

      widgets.forEach((ele) => {
        maxWidgetIndex++;
        
        const newName = widgetManager
          .toolkit(ele.config.originalType)
          .getName();

          const newEle = produce(ele,draft => {
              draft.config.index=maxWidgetIndex;
              draft.config.name= draft.config.name
          });

          state.widgetRecord[newEle.id]=newEle
      });

    },
    updateWidget(state, action: PayloadAction<Widget>) {
      const widget = action.payload;
      state.widgetRecord[widget.id] = { ...widget };
    },
  },
  extraReducers: (builder) => {},
});

export const { updateWidget,addWidgets } = editBoardStackSlice.actions;
export const selecteditBoard = (state: RootState) => state.editBoard;

export default editBoardStackSlice.reducer;
