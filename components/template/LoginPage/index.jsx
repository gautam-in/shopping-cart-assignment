import React, {Component} from "react";
import PageLayout from "../../organism/PageLayout";
import LoginForm from "../../organism/LoginForm";
import {Row, Col} from 'reactstrap';
class LoginPage extends Component {
    render(){
        return(
            <PageLayout>
                <Row>
                    <Col md={6} className="pt-3 pl-5">
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and recommendations</p>
                    </Col>
                    <Col md={6}>
                        <LoginForm/>
                    </Col>
                </Row>                
            </PageLayout>    
            )
    }
}

export default LoginPage;