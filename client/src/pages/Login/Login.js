import React from "react"

import "../../styles/pages/Login.scss"
import { useHistory } from "react-router-dom"

const Login = () => {
    const [loginFields, setLoginFields] = React.useState({
        email: "",
        password: ""

    })

    const history=useHistory()


    const handleLoginFields = (e) => {

        setLoginFields({
            ...loginFields,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = () => {
        console.log("loginfeilds",loginFields)
         const loginData=  JSON.parse( localStorage.getItem('credentials'))
         if(loginData?.email===loginFields?.email){
            history.push("/home")


         }else{
            window.alert("Please Register to Login")
         }

    }
    return (<main className="login_container">
        <section className="login_text">
            <h2>Login Up</h2>
            <p>Get access to your Orders,Wishlist and Recommendations</p>
        </section>
        <section className="login_form">
            <form>

                <div className="input_ele">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" onChange={handleLoginFields} />

                </div>
                <div className="input_ele">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange={handleLoginFields} />

                </div>

                <div className="login_btn">
                    <input type="button" value="Login" onClick={handleLoginSubmit} />
                </div>
            </form>

        </section>
    </main>)

}

export default Login