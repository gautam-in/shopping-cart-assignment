import React, {Component} from "react";
import PageLayout from "../../organism/PageLayout";
import RegisterContent from "../../organism/RegisterContent";
class RegisterPage extends Component {
    render(){
        return(
            <PageLayout>
                <RegisterContent/>
            </PageLayout>    
            )
    }
}

export default RegisterPage;