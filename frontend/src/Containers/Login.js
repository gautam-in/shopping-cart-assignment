import React,{useState,useEffect,useReducer} from 'react';
import { useDispatch } from 'react-redux';
import { Toast,ToastContainer} from 'react-bootstrap';
import * as userAction from '../store/actions/userAction';
import "./Login.css";

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

const Login = () => {

    const [formValid,setFormValid] = useState(false);
    const [error,setError] = useState('');

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const dispatch = useDispatch();

    const [formState,dispatchFormState] = useReducer(formReducer,{
        info:{
            email:'',
            password:''
        },
        validity:{
            email:false,
            password:false
        },
        touched:{
            email:false,
            password:false
        },
        errorMessage:{
            email:'Enter Valid email',
            password:'Atleast 5 characters',
        }
    });

    useEffect(()=>{
        let valid = formState.validity.email && formState.validity.password;
        setFormValid(valid);
    },[formState.validity.email,formState.validity.password]);

    const validationHandlerMethod = (id,value) => {
        let isValid;
        switch(id){
            case "email":
                if(!value.match(emailRegex)){
                    isValid = false
                }
                else{
                    isValid = true;
                }
                break
            case "password":
                if(value.length <5){
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

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await dispatch(userAction.login(formState.info));
        } catch (error) {
            setError(error.message);
        }
    }

    return(
        <main>
            {error?<ToastContainer position="top-center">
                <Toast onClose={()=>{setError('')}} bg="danger" delay={2000} autohide>
                    <Toast.Body>
                        {error}
                    </Toast.Body>
                </Toast>
            </ToastContainer>:null}
            <section>
                <article>
                    <h4>Login</h4>
                    <p>Get access to your orders, Wishlist and Recommendations</p>
                </article>
                <form autoComplete="off">
                    <div>
                        {formState.touched.email?<span style={{color:'red'}}>{!formState.validity.email?formState.errorMessage.email:''}</span>:null}
                        <input className="input" type="email" id="email" onChange={inputChangeHandler}/>
                        <label htmlFor="email" className="label">Email</label>
                    </div>
                    <div>
                        {formState.touched.password?<span style={{color:'red'}}>{!formState.validity.password?formState.errorMessage.password:''}</span>:null}
                        <input className="input" type="password" id="password" onChange={inputChangeHandler} />
                        <label htmlFor="password" className="label">Password</label>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <button style={{backgroundColor:formValid?'#d40851':'gray',border:'none',color:'white',cursor:'pointer'}} disabled={!formValid} onClick={submitHandler}>Login</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login;