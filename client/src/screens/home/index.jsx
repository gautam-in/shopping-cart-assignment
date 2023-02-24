import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import logo from '../assets/logo.png'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { homeContainer, exploreButton, categoryContainer, categoryImgContainer } from './style';
import Button from '../../ui/elements/button';

const Home = () => {
    const [imgUrls, setImgUrls] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fetchImgUrl = async () => {
            let res = await fetch('http://localhost:5000/banners');
            let data = await res.json();
            setImgUrls(() => data?.map(item => item.bannerImageUrl))
        }
        fetchImgUrl();
    }, []);

    useEffect(() => {
        const fetchCategoryData = async () => {
            let res = await fetch('http://localhost:5000/categories');
            let data = await res.json();
            setCategoryData(() => data);
        }
        fetchCategoryData();
    }, [])

    return (
        <div style={homeContainer}>
            <Carousel width="100%" showStatus={false} showThumbs={false} renderArrowPrev={(clickHandler, hasPrev, labelPrev,) =>
                hasPrev && (
                    <div style={{ display: 'flex' }} ><button onClick={clickHandler} style={{
                        display: 'flex',
                        alignSelf: 'center'
                    }}>
                        <img alt=''
                            style={{
                                height: "30px", width: "30px",
                            }}
                            src={`logo192.png`} />
                    </button>
                    </div >
                )
            } renderArrowNext={() => <div>Prev</div>}  >
                {imgUrls?.map(item => <div>
                    <img alt="sdf" src={item} />
                </div >)}

            </Carousel >
            {/* boxShadow: '24px 24px 49px #797979, -24px -24px 49px #ffffff', */}
            {categoryData?.map((item) => <div style={categoryContainer}><img loading="lazy"
                width="40%"
                height="250" alt={item.key} src={item.imageUrl} />
                <div style={categoryImgContainer}>
                    <h1>{item.name}</h1>
                    <span>{item.description}</span>
                    <Link to={`/products/${item.id}`}><Button style={exploreButton} value={`Explore ${item.key}`} /></Link>
                </div >
            </div >)
            }
        </div >
    )
}

export default Home;