import React, {Component} from "react";
import {Row, Col,Button} from 'reactstrap';
class LoginForm extends Component {

    handleChange = (event) =>{

    }
    render(){
        return(
            <Row>
                <Col md={9} className="mt-4">
                    <input type="email" className="inputAnimation"
                    // value={this.state.value} 
                    // onChange={this.handleChange} 
                    />
                    <label>
                    Email
                    </label>
                </Col>
                <Col md={9} className="mt-4">
                    <input type="password" className="inputAnimation"
                    // value={this.state.value} 
                    // onChange={this.handleChange} 
                    />
                    <label>
                    Password
                    </label>
                </Col>
                <Col md={12} className="mt-4"><Button className="w-75">Login</Button></Col>
            </Row>
            )
    }
}

export default LoginForm;