export const signinRules={
    email:{
        required:true,
        pattern:/^[a-zA-Z0-9-_#!]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]{2,}$/,
        message:'Enter valid email'
    },
    password:{
        required:true,
        pattern:/^[a-zA-Z0-9-_#.]{4,}$/,
        message:'Password should be min 4 chars'
    }
}

export const signupRules={
    ...signinRules,
    rePassword:{
        equalTo:'password',
        message:'Confirmed password not matched'
    },
    fName:{
        required:true,
        pattern:/^[a-zA-Z]{3,}$/,
        message:'First name should be Alphabet min 3 chars'
    },
    lName:{
        pattern:/^[a-zA-Z]+$/,
        message:'Last name should be Alphabet chars'
    }
}