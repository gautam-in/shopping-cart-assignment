import React,{useState,useEffect,useReducer} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import * as userAction from '../store/actions/userAction';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const FORM_VALIDATION_UPDATE = 'FORM_VALIDATION_UPDATE';

const formReducer = (state,action) => {
    switch(action.type){
        case FORM_INPUT_UPDATE:
            const updatedInfo = {
                ...state.info,
                [action.id]:action.value
            };
            const updatedTouched = {
                ...state.touched,
                [action.id]:true
            }
            return{
                ...state,
                info:updatedInfo,
                touched:updatedTouched
            }

        case FORM_VALIDATION_UPDATE:
            const updatedValidity = {
                ...state.validity,
                [action.id]:action.isValid
            };
            return{
                ...state,
                validity:updatedValidity
            }
    }
    return state
}

const Signup = () => {
    const [formValid,setFormValid] = useState(false);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const dispatch = useDispatch();
    const history = useHistory();

    const [formState,dispatchFormState] = useReducer(formReducer,{
        info:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validity:{
            firstName:false,
            lastName:false,
            email:false,
            password:false,
            confirmPassword:false
        },
        touched:{
            firstName:false,
            lastName:false,
            email:false,
            password:false,
            confirmPassword:false
        },
        errorMessage:{
            firstName:'Enter Valid First Name',
            lastName:'Enter Valid Last Name',
            email:'Enter Valid email',
            password:'Enter Strong password',
            confirmPassword:'Password did not match'
        }
    })

    useEffect(()=>{
        if(formState.touched.confirmPassword){
            if(formState.info.password !== formState.info.confirmPassword){
                dispatchFormState({type:FORM_VALIDATION_UPDATE,id:"confirmPassword",isValid:false});
            }
            else{
                dispatchFormState({type:FORM_VALIDATION_UPDATE,id:"confirmPassword",isValid:true});
            }
        }
    },[formState.info.password])

    useEffect(()=>{
        let valid = formState.validity.firstName && formState.validity.lastName && formState.validity.email && formState.validity.password && formState.validity.confirmPassword;
        setFormValid(valid);
    },[formState.validity.firstName,formState.validity.lastName,formState.validity.email,formState.validity.password,formState.validity.confirmPassword]);

    const validationHandlerMethod = (id,value) => {
        let isValid;
        switch(id){
            case "firstName":
                if(value.length === 0){
                    isValid = false;
                }
                else{
                    isValid = true;
                }
                break
            case "lastName":
                if(value.length === 0){
                    isValid = false;
                }
                else{
                    isValid = true;
                }
                break
            case "email":
                if(!value.match(emailRegex)){
                    isValid = false
                }
                else{
                    isValid = true;
                }
            case "password":
                if(value.length <5){
                    isValid = false;
                }
                else{
                    isValid = true;
                }
                break
            case "confirmPassword":
                if(value != formState.info.password){
                    isValid = false;
                }
                else{
                    isValid = true;
                }
                break
        }
        dispatchFormState({type:FORM_VALIDATION_UPDATE,id:id,isValid:isValid});
        
    }

    const inputChangeHandler = (e) => {
        validationHandlerMethod(e.target.id,e.target.value.trim());
        dispatchFormState({type:FORM_INPUT_UPDATE,id:e.target.id,value:e.target.value.trim()});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        delete formState.info.confirmPassword
        dispatch(userAction.signup(formState.info));
        history.push('/');
    }

    return(
            <section>
                <article>
                    <h4>Signup</h4>
                    <p>We do not share personal details with anyone. </p>
                </article>
                <form autoComplete="off">
                    <div>
                        {formState.touched.firstName?<span style={{color:'red'}}>{!formState.validity.firstName?formState.errorMessage.firstName:''}</span>:null}
                        <input className="input" type="text" id="firstName" onChange={inputChangeHandler} />
                        <label htmlFor="firstName" className="label">First Name</label>
                    </div>
                    <div >
                        {formState.touched.lastName?<span style={{color:'red'}}>{!formState.validity.lastName?formState.errorMessage.lastName:''}</span>:null}
                        <input className="input" type="text" id="lastName" onChange={inputChangeHandler} />
                        <label htmlFor="lastName" className="label">Last Name</label>
                    </div>
                    <div>
                        {formState.touched.email?<span style={{color:'red'}}>{!formState.validity.email?formState.errorMessage.email:''}</span>:null}
                        <input className="input" type="email" id="email" onChange={inputChangeHandler} />
                        <label htmlFor="email" className="label">Email</label>
                    </div>
                    <div>
                        {formState.touched.password?<span style={{color:'red'}}>{!formState.validity.password?formState.errorMessage.password:''}</span>:null}
                        <input className="input" type="password" id="password" onChange={inputChangeHandler}/>
                        <label htmlFor="password" className="label">Password</label>
                    </div>
                    <div>
                        {formState.touched.confirmPassword?<span style={{color:'red'}}>{!formState.validity.confirmPassword?formState.errorMessage.confirmPassword:''}</span>:null}
                        <input className="input" type="password" id="confirmPassword" onChange={inputChangeHandler}/>
                        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <button style={{backgroundColor:formValid?'#d40851':'gray',border:'none',color:'white',cursor:'pointer'}} disabled={!formValid} onClick={submitHandler}> Signup </button>
                    </div>
                </form>
            </section>
    )
}

export default Signup;