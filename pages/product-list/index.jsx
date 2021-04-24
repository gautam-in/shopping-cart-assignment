import React, {Component} from "react";
import {Row, Col,Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, } from 'reactstrap';

class ProductList extends Component {
    render(){
        return(
            <Row>
                <Col md={3} className='bg-light'>
                    <ul>
                        <li>
                            good
                        </li>
                        <li>
                            gorming
                        </li>
                    </ul>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    {/* <Row>
                                        <Col md={6}>
                                           <small>MRP Rs.200</small> 
                                        </Col>
                                        <Col md={6}>
                                            <Button><small>But Now</small></Button>
                                        </Col>
                                    </Row> */}
                                    <span>
                                    <small>MRP Rs.200</small> 
                                    <Button><small>But Now</small></Button>
                                    </span>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-3">
                                <CardText>Apple</CardText>
                                <CardImg top width="100%" src="/static/images/products/fruit-n-veg/apple.jpg" alt="Card image cap" />
                                <CardBody>
                                    {/* <CardTitle tag="h5">Card title</CardTitle> */}
                                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                                    <CardText>The bright red coloured and heart shaped ,Washington apples are crunchy.</CardText>
                                    <Button>But Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default ProductList;