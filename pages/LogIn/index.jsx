import React, {Component} from "react";
import {Row, Col,Button} from 'reactstrap';
import PageHeader from '../PageHeader';
import Pagefooter from "../PageFooter";

class LogIn extends Component {
    render(){
        return(
            <>
            <div class="container">
            <PageHeader/>
                <Row className="mb-4">
                    <Col md={6} className="pt-3 pl-5">
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and recommendations</p>
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>
                <Pagefooter/>
                </div>
                </>
            )
    }
}

export default LogIn;