import React, { useEffect} from 'react'
import InputFormWrapper from '../Form/InputForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Login = ({ handleAction, title }) => {

    let navigate = useNavigate();
    const description = 'Get access to your Order, cart and recommendations';
    const authToken = useSelector(state => state.SIGNUPREDUCER.currentUser?.stsTokenManager?.refreshToken);

    useEffect(()=>{
        if (authToken) {
            navigate('/')
        }
    },[navigate, authToken])
  return (
    <InputFormWrapper 
        handleAction={handleAction} 
        title={title}
        description={description}
        from="signin"
        />
  )
}

export default Login;
