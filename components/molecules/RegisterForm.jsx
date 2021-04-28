
import Form from '../atoms/form/Form';
import Input from '../atoms/form/Input';
import Button from '../atoms/form/Button';


export default function RegisterForm() {
    return (
        <div>
            <Form name = 'registerForm' targetPage = 'http://localhost:3000/login'>
                <Input type = 'text' placeholder = 'First Name' name = 'firstname'/>
                <Input type = 'text' placeholder = 'Last Name' name = 'lastname'/>  
                <Input type= 'email' placeholder = 'Email' name = 'email' />          
                <Input type= 'password' placeholder = 'Password' name = 'password'/>
                <Input type= 'password' placeholder = 'Confirm password' name = 'password' />
                <Button name = "Signup" type = "submit" />
            </Form>
        </div>
    )
}
