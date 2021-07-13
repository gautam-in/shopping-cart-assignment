import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import '../styles/MainPage.module.css';
import Router from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {

    const [bannersAll, setBanners] = useState();
    const [categoriesAll, setCategories] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/banners")
            .then(res => res.json())
            .then(
                (result) => {
                    setBanners(result);
                })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    setCategories(result);
                })
    }, [])

    const content = categoriesAll && categoriesAll.map((category) => {
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
                                    Router.push(`/products/${id}`,null, { shallow: true });
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
                                    Router.push(`/products/${id}`,null, { shallow: true })
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

    const slides = bannersAll && bannersAll.map((banner) => {
        const { id, bannerImageUrl, bannerImageAlt } = banner;
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

