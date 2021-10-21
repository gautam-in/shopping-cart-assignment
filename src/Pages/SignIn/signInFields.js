export const signInFields = [
   
    {
        type: 'email',
        name: 'email',
        placeHolder: 'Email',
        label: 'Email',
        regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        value:'',
        required: true,
        autoComplete: 'on',
        id: 1,
    },
    {
        type: 'password',
        name: 'password',
        placeHolder: 'Password',
        label: 'Password',
        regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        value:'',
        required: true,
        autoComplete: 'off',
        id: 2,
    },
    
]