import Form from '../atoms/form/Form'
import Input from '../atoms/form/Input'
import Button from '../atoms/form/Button'


export default function LoginForm() {
    return (
        <div>
            <Form name = 'loginForm' targetPage = 'http://localhost:3000/products'>
                <Input type = 'email' placeholder = 'email' name = 'email'/>           
                <Input type= 'password' placeholder = 'password' name = 'password'/>
                <Button name = "Login" type = "submit" />
            </Form>
        </div>
    )
}
