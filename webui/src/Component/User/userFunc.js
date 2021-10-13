function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || [];
}

export function userSignUp(data={}){
    const users=getUsers();
    const duplicate=users.some(user=>user.email===data.email);
    const result={error:false,message:''};
    if(duplicate){
        result.error=true;
        result.message=`${data.email} already exists.`
    }else{
        createNewUser(data);
        result.error=false;
        result.message=`New user created successfully!`
    }
    return result;
}

function createNewUser(data){
    let users=getUsers();
    users=[...users,data];
    localStorage.setItem("users",JSON.stringify(users));
    return true;
}

export function userSignin(data){
    let users=getUsers();
    const me=users.find(user=>user.email===data.email && user.password===data.password);
    const result={error:false,message:''};
    if(me){
        result.error=false;
        result.message=`Login Successful!`;
        result.data=me;
        setLogin(me);
    }else{
        result.error=true;
        result.message=`Invalid login details provided!`;
    }
    return result;
}

function setLogin(user){
    localStorage.setItem("loginuser",JSON.stringify(user));
    return true;
}

export function resetLogin(){
     localStorage.removeItem("loginuser");
     localStorage.removeItem("cartItems");
     return true;
}