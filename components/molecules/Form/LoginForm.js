import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/InputField'

function loginForm(){
    return (
        <form>
            <Input cname="input" type="text" className="input" content="Email" />
            <Input cname="input" type="password" className="input" content="Password" />
            <Button cname=" btn-primary btn-lg btn-block" type="submit" content="Log In" />
            <Button cname="btn btn-outline-primary fb" type="submit" content="New User? SignUp" />
        </form>
    )   
}

export default LoginForm