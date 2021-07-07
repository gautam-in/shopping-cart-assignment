import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import banners from '../backend/server/banners/index.get.json';
import categories from '../backend/server/categories/index.get.json'
import Image from 'next/image';
import '../styles/MainPage.module.css';
import Router from 'next/router';


export default function Home() {

    const content = categories.map((category) => {
        const { id, name, key, description, imageUrl, order, enabled } = category;
        if (enabled && order % 2 !== 0) {
            return (
                <Card key={key} className="shadow p-3 mb-5 bg-white rounded" style={{ width: 'auto' }}>
                    <Row className='no-gutters'>
                        <Col md={5} lg={5}  >
                            <Image className='card-img-top' src={require(`../backend${imageUrl}`).default} alt={name} />
                        </Col>
                        <Col>
                            <Card.Body >
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Button variant="primary" onClick={(e) => {
                                    e.preventDefault();
                                    Router.push({
                                        pathname: `/products/${id}`,
                                    })
                                }}>Explore {key}</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )
        }

        if (enabled && order % 2 === 0) {
            return (
                <Card key={key} className="shadow p-3 mb-5 bg-white rounded" style={{ width: 'auto' }}>
                    <Row className='no-gutters'>
                        <Col>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Button variant="primary" onClick={(e) => {
                                    e.preventDefault();
                                    Router.push({
                                        pathname: `/products/${id}`,
                                    })
                                }}>Explore {key}</Button>
                            </Card.Body>
                        </Col>
                        <Col md={5} lg={5}  >
                            <Image className='card-img-top' src={require(`../backend${imageUrl}`).default} alt={name} />
                        </Col>
                    </Row>
                </Card>
            )
        }
    });

    const slides = banners.map((banner) => {
        const { id, bannerImageUrl, bannerImageAlt } = banner;
        // console.log(banner);
        return (
            <Carousel.Item className="shadow p-3 mb-5 bg-white rounded" key={id} interval={2000}>
                <Image
                    className="d-block w-100"
                    width='2000%'
                    height='500%'
                    src={
                        require(`../backend${bannerImageUrl}`).default
                    }
                    alt={bannerImageAlt}
                />
            </Carousel.Item>
        );
    });

    return (
        <div className='container' >
            <Carousel variant="dark">{slides}</Carousel>
            <div>
                {content}
            </div>
        </div>
    )
}

