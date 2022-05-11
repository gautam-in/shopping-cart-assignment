import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import images from './Images';
import styles from './style.module.css'
import './heroCorousal.style.scss'
class HeroCorousal extends Component {
    constructor(props){
        super(props)
        this.state={
            corousals:[],
            data_loadded:false
        }
    }
    componentDidMount(){
        fetch("http://localhost:5000/banners")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                corousals:json,
                data_loadded:true
            })
        })
    }
    render() {
        const {corousals, data_loadded}= this.state
        console.log(corousals)
        return (
            <Container>
                <Row>
                    <Col >
                        <Carousel variant="dark" className="shadow-sm banner">
                            {
                                
                                    (corousals)? corousals.map((corousel) => {
                                        return <Carousel.Item key={corousel.id}><img
                                        className={styles.marginlow}
                                        
                                        src={corousel.bannerImageUrl}
                                        alt={corousel.bannerImageAlt}
                                    />
                                    <Carousel.Caption>
                                        {/* <h3>{corousel.bannerImageAlt}</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption></Carousel.Item>
                                    }):''
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default HeroCorousal;