
const initialState={
    width:0
}
export const ScreenWidthReducer=(state=initialState,{type})=>{
if(type=='GET_SCREEN_WIDTH'){
    console.log(window.innerWidth);
    return {...state,width:window.innerWidth}
}
else{
    return state
}
}