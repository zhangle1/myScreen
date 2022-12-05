import { ValueOf } from "../../../types";
import {
  ChartStyleSectionComponentType,
} from "../../constants";

export type ChartConfigBase = {
  label?: string;
  key: string;
};

export type ChartStyleSectionGroup = ChartStyleSectionRow & {
  rows?: ChartStyleSectionGroup[];
};

export type ChartStyleConfig = ChartConfigBase &
  ChartStyleSectionGroup &
  ChartStyleSectionTemplate;

export type ChartStyleSectionTemplate = {
  template?: ChartStyleSectionRow;
};

export type ChartStyleSectionRow = {
  label: string;
  key: string;
  default?: any;
  value?: any;
  disabled?: boolean;
  hide?: boolean;
  // options?: ChartStyleSectionRowOption;
  // watcher?: ChartStyleSectionRowWatcher;
  template?: ChartStyleSectionRow;
  comType: ValueOf<typeof ChartStyleSectionComponentType>;
  hidden?: boolean;
};
