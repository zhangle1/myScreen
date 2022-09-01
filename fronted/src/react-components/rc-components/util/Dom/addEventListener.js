
import ReactDOM from 'react-dom';

export default function addEvnetListenerWrap(traget, eventType, cb, option){
    const callback = ReactDOM.unstable_batchedUpdates?function run(e){
        ReactDOM.unstable_batchedUpdates(cb, e);
    }:cb;
    if(traget.addEventListener){
        traget.addEventListener(eventType,callback, option);
    }
    return {
        remove: ()=>{
            if(traget.removeEventListener){
                target.removeEventListener(eventType, callback, option);
            }
        }
    };
}
    