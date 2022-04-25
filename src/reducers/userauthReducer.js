const initialState = {
    loggedIn: false
}


export const userauthReducer = (state = initialState , action) => {
    debugger;
    switch(action.type){
        case 'SIGNUP':
            state.loggedIn = true;

            return {
                user: state
            }
        
        case 'SIGNIN':
            state.loggedIn = true;

            return {
                user: state
            }

        default : return state
    }
}

