const constants = {
    base_api_url:'http://localhost:5000',  
    COLORS:{        
        SCARLET: '#b1288d'
    },
    TEXTS:{
        DEFAULTS:{
            hai: 'Hi',
            invalid_email: 'Invalid email',
            offline_msg: 'It seems that you are offline. Please check your internet connection.',
            online_msg: 'You are back online'
        },
        TOASTS: {
            fname: 'Enter first name',
            lname: 'Enter last name',
            invalid_email: 'Invalid email',
            invalid_pwd: 'Check password fields',
            order_placed: 'Congratulations, Order Placed',
            cart_emptied: 'Cart is emptied',
            pwdcriteriamismatch: 'Entered password did not meet minimum criteria',
            login_success: 'Tada...you are logged-in',
            click_cart: 'Click on cart to buy',
            item_added: 'Item Added!'
        },
        MODAL:{
            modal_desc: "Hurry up! You won't find it cheaper anywhere.",
            customEnterModalAnimation: 'customEnterModalAnimation',
            customLeaveModalAnimation: 'customLeaveModalAnimation',
        },
        FORM_INPUTS:{
            fname: {
                label: 'Enter your first name',
                value: 'First Name*'
            },
            lname: {
                label:'Enter your last name',
                value:'Last Name*'
            },
            email: {
                label:'Enter your email',
                value:'Email*'
            },
            pwd: {
                label: 'Enter your password',
                value: 'Password*'
            },
            cpwd: {
                label: 'Please confirm password by typing again',
                value: 'Confirm Password*'
            },
            signup_submit:{
                label:'Hit enter or click on this button to sign up',
                value:'Signup'
            },
            signin_submit:{
                label: 'Hit enter or click on this button to login',
                value: 'Login'
            }
        },
        SIGNUP:{
            hai: 'Hai',
            signup_success: 'You are signed-up successfully!',
            form_values:{
                fname: 'fname',
                lname: 'lname',
                email: 'email',
                pwd: 'password',
                cpwd: 'cpassword'
            }
        }
    }
}
export default constants;