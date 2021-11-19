const intialState = {
    users: [
        {
            id : '2132132312',
            email : 'ayush@gmail.com',
            name : 'Ayush Agrawal'
        }
    ],
    curUser : null
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

    return state;
}