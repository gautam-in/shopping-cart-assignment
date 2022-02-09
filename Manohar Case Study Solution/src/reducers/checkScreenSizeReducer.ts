function CheckScreenSizeReducer(defStore: boolean = false,action: any){
    switch(action.type){
        case 'CHECK_SCREEN_SIZE':
            return action.displayBackground;
        default: return defStore
    }
}
export default CheckScreenSizeReducer;