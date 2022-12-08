import { ChartStyleConfig } from "../app/types/config/ChartConfig";
import { isEmptyArray } from "./object";


export function getStyles(
    configs: Array<ChartStyleConfig>,
    parentKeyPaths: Array<string>,
    childTargetKeys: Array<string>,
){
    const rows = getValue(configs, parentKeyPaths, 'rows') as any;
    if (!rows) {
      return Array(childTargetKeys.length).fill(undefined);
    }
    return childTargetKeys.map(k => getValue(rows, [k]));
}




export function getValue(
    configs: Array<ChartStyleConfig>,
    keyPaths: Array<string>,
    targetKey = 'value',
){
    let iterators = configs || [];
    while (!isEmptyArray(iterators)) {
        const key = keyPaths?.shift();
        const group = iterators?.find(sc => sc.key === key);
        if (!group) {
          return undefined;
        }
        if (isEmptyArray(keyPaths)) {
          var value= group[targetKey];
          if(value===undefined){
            return group['default']
          }else{
            return value
          }
        }
        iterators = group.rows || [];
      }
}