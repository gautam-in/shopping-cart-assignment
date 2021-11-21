const intialState = {
    users: [],
    authStatus : false,
    userAlreadyRegistered : false
}

export default function usersReducer (state = intialState , action){
    if (action.type === 'GET_USER_ON_LOGIN') {
        let email = action.payload.email;
        let user = state.users.find(user => user.email === email)
        if (user)  {
            return { curUser : {...user} }
        }
        return state;
    }   

    if(action.type === 'ADD_UESR_ON_REGISTER') {
        let user = action.payload.newUser;
        let { email } = user;
        let userExist = state.users.find(user => user.email === email);
        if (!userExist) {
            let newUsersArr = [...state.users];
            newUsersArr.push({...user})
            return {...state , users: [...newUsersArr], success: true , message : "User Registered Successfully!" }
        }else{ 
            return {...state, authStatus: true, success: false, message : "User Already Registered!"};
        } 

    } 

    return state;
}