export const sortAsc=(a,b)=>{
    return a.order-b.order;
}

export const fn=()=>console.log('No function defined.');

export const deepCopy=data=>{
    return JSON.parse(JSON.stringify(data));
}