import logo from '../../../assets/logo.png'
import Button from '../button';
import { textButton } from '../../../common/style';

export const logoContainer = {
    display: 'flex',
    height: '70px',
    width: '100px'
}

export const buttonContainer = {
    display: 'flex',
    alignSelf: 'flex-end',
}

export const linkContainer = {
    display: "flex",
    justifyContent: "flex-start",
    width: "700px",
    paddingLeft: "100px",
    paddingBottom: '10px',
    alignItems: "flex-end"
}

export const mainContainer = { width: '100%', display: 'flex' }

export const sideLinkContainer = { display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }

export const cartContainer = { display: "flex", justifyContent: "flex-end" }


const Header = (props) => {
    return (<div style={mainContainer}>
        <img style={logoContainer} alt='logo' src={logo}></img>
        <div style={linkContainer}>
            <Button style={textButton} value='Home' />
            <Button style={textButton} value='Products' />
        </div>
        <div style={sideLinkContainer}>
            <div>
                <Button style={textButton} value='SignIn' />
                <Button style={textButton} value='Register' />
            </div>
            <div style={{ cartContainer }}> 0 items</div></div>
    </div>)
}

export default Header;