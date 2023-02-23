
import Input from '../../ui/elements/textBox';
import Button from '../../ui/elements/button'

import { exploreButton } from '../../common/style';

const Login = () => {

    return (<div style={{ display: 'flex', alignSelf: 'center', height: '80%', width: '100%', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <h1>Login</h1>
            <p>We don not share your personal details with anyone</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Input label='Email' />
            <Input label='Password' />
            <Button style={exploreButton} value='Login' />
        </div>
    </div>)
}

export default Login;