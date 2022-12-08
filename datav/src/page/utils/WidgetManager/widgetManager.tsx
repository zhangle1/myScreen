import { WidgetProto } from "../../../app/types/config/widgetType";


class WidgetManager {
    private static _instance: WidgetManager;
    private widgetProtoMap: Record<string,WidgetProto>={};
    private constructor() {}

    public static getInstance() {
        if (!this._instance) {
          this._instance = new WidgetManager();
        }
        return this._instance;
      }


      public register(obj:{
        originalType: string;
        toolkit: WidgetProto['toolkit'];
      }){
        if (this.widgetProtoMap[obj.originalType]) {
            console.warn(`Widget ${obj.originalType} already registered`);
          }
          this.widgetProtoMap[obj.originalType] = {
            originalType: obj.originalType,
            toolkit: obj.toolkit,
          };
      }

      public allWidgetProto() {
        return this.widgetProtoMap;
      }
      public widgetProto(originalType: string) {
        return this.widgetProtoMap[originalType];
      }

      public toolkit(originalType: string) {
        return this.widgetProtoMap[originalType]?.toolkit;
      }

}

export const widgetManagerInstance = WidgetManager.getInstance();
