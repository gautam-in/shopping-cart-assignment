
import { Carousel } from 'react-responsive-carousel';
import styles from '../../styles/imageSlider.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = ({ banners }) => {

    return (
        <section className={styles.imgContainer}>
            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} showStatus={false} >
                {
                    banners.map(banner => (
                        <div key={banner.id}>
                            <img src={banner.bannerImageUrl} />
                        </div>
                    ))
                }
            </Carousel>
        </section>
    )
}


export default ImageSlider
