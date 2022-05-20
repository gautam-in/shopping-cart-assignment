import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signup.css';
const data =[{
    id:'firstname',
    label:'FirstName',
    value:"",
    regex:/^[a-zA-z]+([\s][a-zA-Z]+)*$/,
    error:false,
    helperText:"please enter valid firstname"
},{
    id:'lastname',
    label:'LastName',
    value:"",
    regex:/^[a-zA-z]+([\s][a-zA-Z]+)*$/,
    error:false,
    helperText:"please enter valid lastname"
},
{
    id:'email',
    label:'Email',
    value:"",
    regex:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    error:false,
    helperText:"please enter valid email"
},
{
    id:'password',
    label:'Password',
    value:"",
    regex:/[0-9a-zA-Z]{6,}/,
    error:false,
    helperText:"please enter valid password"
},
{
    id:'confirmPassword',
    label:'Confirm Password',
    value:"",
    regex:/[0-9a-zA-Z]{6,}/,
    error:false,
    helperText:"please enter valid confirm password"
}
];
const SignUp = ()=>{
    const [registerData,setRegisterData]=useState(data);
    const [confirmPassErr,setConfirmPassErr]=useState(false);
    const handleChange = (index,event)=>{
        setRegisterData([...registerData.slice(0, index),
            {
                ...registerData[index], value: event.target.value,error:registerData[index].regex.test(event.target.value)?false:true
            },
            ...registerData.slice(index + 1)
            ]);
            setConfirmPassErr(false);
            }
            const handleRegister = ()=>{
                const findPasswordObj = registerData.find((datas)=>datas.id==="password");
                const findConformPasswordObj = registerData.find((datas)=>datas.id==="confirmPassword");
                if(findPasswordObj&&findConformPasswordObj&&findPasswordObj.value!==findConformPasswordObj.value){
                    setConfirmPassErr(true);
                }
                else{
                    setConfirmPassErr(false);
                }
                console.log("handleRegister",findPasswordObj,findConformPasswordObj,confirmPassErr)
            }
            const isSignUpBtnDisabled = registerData.some((data)=>data.error);
            const filedNotEmpty = registerData.some((data)=>data.value==="");

    return(
        <React.Fragment>
            <div>
                {registerData.map((items,index)=>{
return (
    <div>
                        <TextField
                          className="textfield"
                        onChange={(event)=>handleChange(index,event)} 
                        required 
                        id="standard-required"
                         label={items.label} 
                         value={items.value}
                         error={items.error}
                         helperText={items.error?items.helperText:""}
                          />
                        </div>
)
                })}
                {confirmPassErr?<div>
                    <span className="confirmPassErr">Confirm password should match password</span>
                </div>
               :null}
            </div>
            <div className='btn'>
            <Button className="textfield" onClick={handleRegister} variant="contained" color="secondary" disabled={filedNotEmpty||isSignUpBtnDisabled}>
              Sign Up
            </Button>
            </div>
            
        </React.Fragment>
    )
}
export default SignUp;