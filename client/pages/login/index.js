import userForm from "../../customHooks/UserForm";
import { LoginInfoContainer , LoginForm, FormWrapper} from "../../components/styles/Form";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { connect } from "react-redux";
import { ErrorMessage } from "../../components/Error";
import { setAuthentication } from "../../store/actions/authAction";



const Login = ({users}) => {
     const { inputs, onHandleChange, clearInputs } = userForm({})  
     const dispatch = useDispatch();   
     const router = useRouter();

     const onSubmitHandler = (e) => {
        e.preventDefault();
        let { email } = inputs;
        const isRegisteredUser = users.find(user => user.email === email);
        clearInputs()
        console.log(isRegisteredUser)
        if(isRegisteredUser) {
            dispatch(setAuthentication(true, isRegisteredUser));
            router.push({
                pathname: '/'
            }) 
        } else {
            router.push({
                pathname: '/register'
            }) 
        }
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


const mapStateToProps = (state) => ({
    users : state.users.users
})
  
export default connect(mapStateToProps, null)(Login)