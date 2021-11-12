import Store from "./Store";

export function getState(){
    return Store.getState();
}

export function dispatch(action: any): void{
    if (Store !== undefined){
        Store.dispatch(action);
    }
}