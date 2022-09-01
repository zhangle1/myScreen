import ReactDOM from 'react-dom';


export default function findDOMNode<T = Element | Text>(
    node: React.ReactInstance | HTMLElement,
): T {
    if(node instanceof HTMLElement){
        return (node as unknown) as T
    }
    return (ReactDOM.findDOMNode(node) as unknown) as T;

}