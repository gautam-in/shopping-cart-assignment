import { Card, Col, Row } from 'react-bootstrap';

const ProductCard = (props) => {
    const { products } = props;
    return (
        <div className='product'>
            <Row>
                {
                    products.map((item) => {
                        return (
                            <Col xs={6} md={4} key={item.id}>
                                <Card >
                                    <div className='title'>{item.name}</div>
                                    <Card.Img variant="top" src={item.imageURL} alt={item.name} />
                                    <Card.Body>
                                        <Card.Text>
                                           {item.description}
                                        </Card.Text>
                                        <div className='card-footer'>
                                        <div className='price'>MRP Rs{item.price}</div>
                                        <button className='btn-cls'>Buy now</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default ProductCard;
