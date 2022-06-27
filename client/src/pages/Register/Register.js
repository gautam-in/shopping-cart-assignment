import React from "react"
import "../../styles/pages/Register.scss"
import {useHistory} from "react-router-dom"

const Register = () => {
    const history = useHistory()

    const [formFields, setFormFields] = React.useState({
        fields: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: ""

        },
        errors: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: ""

        }

    })

    const validate = (name, value) => {
        const { fields } = formFields;
        switch (name) {
            case "firstname":
                if (!value || value.trim() === "") {
                    return "First name is Required";
                } else {
                    return "";
                }
            case "lastname":
                if (!value || value.trim() === "") {
                    return "Last name is Required";
                } else {
                    return "";
                }
            case "email":
                if (!value) {
                    return "Email is Required";
                } else if (
                    !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
                ) {
                    return "Enter a valid email address";
                } else {
                    return "";
                }

            case "password":
                if (!value) {
                    return "Password is Required";
                } else if (value.length < 8 || value.length > 15) {
                    return "Please fill at least 8 character";
                } else if (!value.match(/[a-z]/g)) {
                    return "Please enter at least lower character.";
                } else if (!value.match(/[A-Z]/g)) {
                    return "Please enter at least upper character.";
                } else if (!value.match(/[0-9]/g)) {
                    return "Please enter at least one digit.";
                } else {
                    return "";
                }
            case "confirmpassword":
                if (!value) {
                    return "Confirm Password Required";
                } else if (value !== fields.password) {
                    return "New Password and Confirm Password Must be Same";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }



    }

    const handleFormFields = (e) => {
        console.log("form fieldsss", e.target.name, e.target.value)
        setFormFields({
            errors: {
                ...formFields.errors,
                [e.target.name]: validate(e.target.name, e.target.value)
            },
            fields: {
                ...formFields.fields,
                [e.target.name]: e.target.value
            }
        });

    }

    const handleSubmit = (e) => {
        const { fields } = formFields;
        // e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            setFormFields({ errors: validationErrors });
            return;
        }

        let data = {}
        if (fields.firstname && fields.lastname && fields.email &&
            fields.password && fields.confirmpassword) {
          
            data = {
                firstname: fields.firstname,
                email: fields.email,



            };
              window.alert(" Registered Successfully");
              localStorage.setItem("credentials", JSON.stringify(data))

              history.push("/login")

        }
      
      

    }
    return (<main className="register_form_container">
        <section className="register_text">
            <h2>Sign Up</h2>
            <p>We do not share your personal details with anyone</p>
        </section>
        <section className="resgister_form">
            <form >
                <div className="input_Item">
                    <div className="input_ele">
                        <label htmlFor="firstname">FirstName</label>
                        <input name="firstname" id="firstname" type="text" onChange={handleFormFields} />


                    </div>
                    <div className="errorbox" tabIndex="0">
                        <span className="text-danger">{formFields.errors.firstname}</span>
                    </div>
                </div>
                <div className="input_Item">
                    <div className="input_ele">
                        <label htmlFor="lastname">LastName</label>
                        <input name="lastname" id="lastname" type="text" onChange={handleFormFields} />

                    </div>
                    <div className="errorbox" tabIndex="0">
                        <span  className="text-danger">{formFields.errors.lastname}</span>
                    </div>
                </div>
                <div className="input_Item">
                    <div>
                        <div className="input_ele">
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" type="email" onChange={handleFormFields} />

                        </div>
                        <div className="errorbox" tabIndex="0">
                            <span className="text-danger">{formFields.errors.email}</span>
                        </div>
                    </div>
                </div>
                <div className="input_Item">
                    <div className="input_ele">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" onChange={handleFormFields} />

                    </div>
                    <div className="errorbox" tabIndex="0">
                        <span className="text-danger">{formFields.errors.password}</span>
                    </div>
                </div>
                <div className="input_Item">
                    <div className="input_ele">
                        <label htmlFor="confirmpassword">ConfirmPassword</label>
                        <input name="confirmpassword" id="confirmpassword" type="password" onChange={handleFormFields} />

                    </div>
                    <div className="errorbox" tabIndex="0">
                        <span className="text-danger">{formFields.errors.confirmpassword}</span>
                    </div>
                </div>

                <div className="submit_btn">
                    <input type="button" value="submit" onClick={handleSubmit} />
                </div>

            </form>
        </section>

    </main>)

}

export default Register