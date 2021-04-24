import React, {Component} from "react";
import {Row, Col,Button} from 'reactstrap';
import PageHeader from '../PageHeader';
import Pagefooter from "../PageFooter";

class SignUp extends Component {
    render(){
        return(
            <>
            <div class="container">
            <PageHeader/>
                <Row className="mb-4">
                    <Col md={6} className="pt-3 pl-5">
                        <h2>Signup</h2>
                        <p>We do not share your personal details with anyone.</p>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={9} className="mt-4">
                                <input type="text" className="inputAnimation"
                                // value={this.state.value} 
                                // onChange={this.handleChange} 
                                />
                                <label>
                                First Name
                                </label>
                            </Col>
                            <Col md={9} className="mt-4">
                                <input type="text" className="inputAnimation"
                                // value={this.state.value} 
                                // onChange={this.handleChange} 
                                />
                                <label>
                                Last Name
                                </label>
                            </Col>
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
                            <Col md={9} className="mt-4">
                                <input type="password" className="inputAnimation"
                                // value={this.state.value} 
                                // onChange={this.handleChange} 
                                />
                                <label>
                                Confirm Password
                                </label>
                            </Col>
                            <Col md={12} className="mt-4"><Button className="w-75">Signup</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Pagefooter/>
                </div>
                </>
            )
    }
}

export default SignUp;