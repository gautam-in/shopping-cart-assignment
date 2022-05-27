import React, { useEffect } from 'react'
import { SignupWrapper } from './Signup.style';
import InputFormWrapper from '../Form/InputForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Signup = ({ handleAction, title }) => {

    let navigate = useNavigate();
    const description = 'We donot share personal details with anyone';
    const authToken = useSelector(state => state.SIGNUPREDUCER.currentUser?.stsTokenManager?.refreshToken);

    useEffect(()=>{
        if (authToken) {
            navigate('/')
        }
    },[])

  return (
    <SignupWrapper>
        <InputFormWrapper 
            handleAction={handleAction} 
            title={title} 
            description={description}
            from="signup"
        />
    </SignupWrapper>
  )
}

export default Signup
