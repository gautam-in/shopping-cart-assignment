import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss';
import { BannerURL, CategoryURL } from '../../store/url/api';

const Home = () => {
    const navigate = useNavigate();
    const [banners, setBanners] = useState([]);
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const bannersdata = await axios.get(BannerURL);
            const category = await axios.get(CategoryURL);
            setBanners(bannersdata.data);
            setCategory(category.data)
        }
        fetchData();
    }, [])
    const gotoProducts = (e) => {
        navigate("/products", { state: { id: e } })
    };
    return (
        <div>
            <div className='banner-section'>
                <Carousel>
                    {
                        banners.map((item) => {
                            return (
                                <Carousel.Item key={item.id}>
                                    <img
                                        className="d-block w-100"
                                        src={item.bannerImageUrl}
                                        alt={item.bannerImageAlt}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className='category-section'>
                {
                    categories.map((item, i) => {
                        return (
                            <Card key={item.id}>
                                {
                                    i % 2 === 0 ? <Row>
                                        <Col xs={5} md={5}>
                                            <div className='category-img'>
                                                <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
                                            </div>
                                        </Col>
                                        <Col xs={7} md={6}>
                                            <Card.Body>
                                                <div className='category-desc'>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {item.description}
                                                    </Card.Text>
                                                    <button className='btn-cls' onClick={() => gotoProducts(item.id)}>Explore {item.name}</button>
                                                </div>
                                            </Card.Body>
                                        </Col>
                                    </Row> : <Row>
                                        <Col xs={7} md={6}>
                                            <Card.Body>
                                                <div className='category-desc'>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>
                                                        {item.description}
                                                    </Card.Text>
                                                    <button className='btn-cls' onClick={() => gotoProducts(item.id)}>Explore {item.name}</button>
                                                </div>
                                            </Card.Body>
                                        </Col>
                                        <Col xs={5} md={5}>
                                            <div className='category-img'>
                                                <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
                                            </div>
                                        </Col>
                                    </Row>
                                }

                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
