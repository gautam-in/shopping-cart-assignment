import styles from "../../styles/SignUp.module.css"
import {useEffect, useState} from "react";
import {Form, Button, Input} from 'antd';
import FloatingLabel from "../../components/FloatingLabel";
import {useAuth} from "../../utils/AuthProvider";

const SignIn = (props) => {
    const [form] = Form.useForm();
    const auth = useAuth();
    const [formValues, setFormValues] = useState({})
    const onChangeFormValue = (values) => {
        setFormValues({...formValues, ...values})
    }
    const onSubmit = async () => {
        const { password, email} = formValues
        const data = {
            password,
            email
        }
        try {
            await auth.signIn(data)
        } catch (e) {

        }
    }
    return (
        <div className={styles["signup-container"]}>
            <div>
                <b><h1>Login</h1></b>
                <h4>Get access to your Orders, Wishlist and Recommendations</h4>
            </div>
            <div>
                <Form
                    form={form}
                    onValuesChange={onChangeFormValue}
                    layout={"vertical"}
                >
                    <Form.Item name={"email"} label={"Email"}>
                        <Input className={styles["default-input"]} />
                    </Form.Item>
                    <Form.Item name={"password"} label={"Password"}>
                        <Input className={styles["default-input"]} type={"password"}/>
                    </Form.Item>
                    <Form.Item>
                        <Button className={styles["signup-button"]} onClick={onSubmit}>
                            <p style={{color: "white", fontSize: "1vw", marginTop: 0, marginBottom: 0}}>Sign In</p>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default SignIn