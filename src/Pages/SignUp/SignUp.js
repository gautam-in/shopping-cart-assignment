import useForm from "../../Hooks/useForm";
import { Button, INPUT_STYLE, INPUT_WRAPPER, LEFT_SECTION_STYLE, RIGHT_SECTION_STYLE, SIGN_IN_UP_HEADER, SIGN_IN_UP_INFO, SIGN_IN_UP_WRAPPER_STYLE } from "../../Styles/SignInUpStyles";
export default function SignUp(){
    const { handleChange, input } = useForm();
    function handleSubmit(e){

    }
    return(
        <SIGN_IN_UP_WRAPPER_STYLE>
            <LEFT_SECTION_STYLE>
                <SIGN_IN_UP_HEADER>
                    Login
                </SIGN_IN_UP_HEADER>
                <SIGN_IN_UP_INFO>
                    We don't share your personal details with anyone.
                </SIGN_IN_UP_INFO>
            </LEFT_SECTION_STYLE>
            <RIGHT_SECTION_STYLE>
                <form>
                    <INPUT_WRAPPER>
                        <INPUT_STYLE type="text" name="email" required="true" value={input.firstname} handleChange={handleChange} />
                        <label className="label">
                            <span className="content">
                                First Name
                            </span>
                        </label>
                    </INPUT_WRAPPER>
                    <INPUT_WRAPPER>
                        <INPUT_STYLE type="text" name="lastname" required="true" value={input.lastname} handleChange={handleChange} />
                        <label className="label">
                            <span className="content">
                                Last Name
                            </span>
                        </label>
                    </INPUT_WRAPPER>
                    <INPUT_WRAPPER>
                        <INPUT_STYLE type="text" name="email" required="true" value={input.email} handleChange={handleChange} />
                        <label className="label">
                            <span className="content">
                                Email
                            </span>
                        </label>
                    </INPUT_WRAPPER>
                    <INPUT_WRAPPER>
                    <INPUT_STYLE type="password" name="password" required="true" value={input.password} handleChange={handleChange} />
                        <label className="label">
                            <span className="content">
                                Password
                            </span>
                        </label>
                    </INPUT_WRAPPER>
                    <INPUT_WRAPPER>
                    <INPUT_STYLE type="text" name="confirmpassword" required="true" value={input.confirmpassword} handleChange={handleChange} />
                        <label className="label">
                            <span className="content">
                                Confirm Password
                            </span>
                        </label>
                    </INPUT_WRAPPER>
                    
                    <Button onClick={() => handleSubmit()}>SignIn</Button>
                </form>
            </RIGHT_SECTION_STYLE>
        </SIGN_IN_UP_WRAPPER_STYLE>
    );
}