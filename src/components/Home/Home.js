import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banners from '../../server/banners/index.get.json';
import categories from '../../server/categories/index.get.json';

function Home() {
    const history = useHistory();
    let flag = 0;
    return (
        <div className='home-page'>
            <Carousel showArrows={true} showThumbs={false}>
                {banners.map(img => <div className='carousel' key={img.id}>
                    <img src={img.bannerImageUrl} alt={img.bannerImageAlt} />
                </div>)}
            </Carousel>
            {categories.map(category => {
                if(category.enabled && flag === 0) {
                    flag = 1;
                    return (
                        <div className='categories' key={category.id}>
                    <div className={'category-description' }>
                        <div style={{fontWeight:'bold'}}>{category.name}</div>
                        <div style={{textAlign:'center'}}>{category.description}</div>
                        <button onClick={()=>history.push(`/products/${category.id}`)} className='btn-primary'>Explore {category.name}</button>
                    </div>
                    <div className='category-image'>;
                        <img src={category.imageUrl} height='150' width='200' alt={category.name} />
                    </div>
                </div>
                    )
                }
                if(category.enabled && flag === 1) {
                    flag = 0;
                    return (
                        <div className='categories' key={category.id}>
                            <div className='category-image'>
                                <img src={category.imageUrl} height='150' width='200' alt={category.name} />
                            </div>
                            <div className={'category-description' }>
                                <div style={{fontWeight:'bold'}}>{category.name}</div>
                                <div style={{textAlign:'center'}}>{category.description}</div>
                                <button onClick={()=>history.push(`/products/${category.id}`)} className='btn-primary'>Explore {category.name}</button>
                            </div>
                        </div>

                    )
                }
                return null;
            })}
            
        </div>
    )
}

export default Home
