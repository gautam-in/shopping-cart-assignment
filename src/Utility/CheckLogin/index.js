/* Authentication functions */
/* check sign in */
export function checkIfUserIsSignedUp(){
    return new Promise ((resolve, reject) =>{
        let loginDetails = JSON.parse(sessionStorage.getItem("currentLoggedUser"))
        if(!!loginDetails && Object.keys(loginDetails).length!==0 && loginDetails.hasOwnProperty("isActive"))
            resolve(loginDetails)
        else
            reject(false)
    })
    
}



/* create new sign in record */
export function createCurrentUser({email, password}){
    return new Promise((resolve, reject) => {
     let loggedData = JSON.parse(localStorage.getItem("LoginData"))
        if(loggedData.length === 0)
            reject("not registered")
        else {
            let foundMatch = false
            loggedData.forEach(element => {
                if(element.email === email){
                    foundMatch = true;
                }
            })
           
            if(!!foundMatch){
                let passwordMatch = false
                loggedData.forEach(element => {
                    if(element.email === email && element.password === password){
                        passwordMatch = true
                        storeCredentialsInSession(email, password)
                    }
                })
                !!passwordMatch && resolve("loggedIn")
                 !passwordMatch && resolve("incorrect credentials")
            }
            else {
                reject("not registered")
            }

        }
    })
    
}


/* create new user record */
export function createNewUserRecord({email, password}){
    return new Promise((resolve, reject) => {
        let loggedData = JSON.parse(localStorage.getItem("LoginData"))
        if(!loggedData){
            let loginSeries = []
            loginSeries=[...loginSeries, {
                email: email,
                password: password,
            }]
            localStorage.setItem("LoginData", JSON.stringify(loginSeries))
            storeCredentialsInSession(email, password)
            resolve("new")
        }
        else{
            let alreadyRegistered = false
            loggedData.forEach((element)=>{
                if(element.email === email){
                    alreadyRegistered = true
                }
            })
            if(!!alreadyRegistered){
                storeCredentialsInSession(email, password)
                resolve("already")
            } 
                else {
                    loggedData = [...loggedData, {
                        email: email,
                        password: password,
                    }]
                    localStorage.setItem("LoginData", JSON.stringify(loggedData))
                    storeCredentialsInSession(email, password)
                    resolve("new")
            }
        }
    })
}


/* store user credentials in session storage */
function storeCredentialsInSession(email, password){
    sessionStorage.setItem("currentLoggedUser", JSON.stringify({
        email: email, 
        password: password,
        isActive: true
    }))
}