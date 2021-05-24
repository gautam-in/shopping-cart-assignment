import { Component } from "react";
import { Row, Col, Button } from 'reactstrap';
import PageLayout from "../../organism/PageLayout";
import RegisterForm from "../../organism/RegisterForm";
class RegisterPage extends Component {
    render(){
       return (
          <PageLayout>
             <Row>
                <Col md={6} className="pt-3 pl-5">
                   <h2>Signup</h2>
                   <p>We do not share your personal details with anyone.</p>
                </Col>
                <Col md={6}>
                   <RegisterForm />
                </Col>
             </Row>
          </PageLayout>
       )
    }
}

export default RegisterPage;