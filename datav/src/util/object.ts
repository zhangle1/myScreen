
export function isUndefined(o): boolean {
    return o === undefined;
  }

export function isEmpty(o?: null | any): boolean {
    return o === null || isUndefined(o);
  }

export function isEmptyArray(value?){
    if (isEmpty(value)) {
        return true;
      }
    
      return Array.isArray(value) && !value?.length;
}