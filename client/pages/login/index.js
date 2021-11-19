import userForm from "../../customHooks/UserForm";
import { LoginInfoContainer , LoginForm, FormWrapper} from "../../components/styles/Form";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setAuthentication } from "../../store/actions/authAction";

export default function Login() {
     const { inputs, onHandleChange } = userForm({})  
     const dispatch = useDispatch();   
     const router = useRouter();

     const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(setAuthentication(true, inputs ));
        console.log('Logged In')
        router.push({
            pathname: '/'
        })
     }

     return (
         <FormWrapper>
                <LoginInfoContainer>
                    <h2> Login </h2>
                    <p> Get Access to your wishlist, orders andd recommendations!</p>
                </LoginInfoContainer>
                <LoginForm onSubmit={onSubmitHandler}>
                    <input type="text" name="email" placeholder="Email" value={inputs.email} onChange={onHandleChange}/>
                    <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={onHandleChange}/>
                    <button type="submit">LOGIN</button>
                </LoginForm>
         </FormWrapper>
         
     )
}