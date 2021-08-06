import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBannerData, getCategoryData } from "../../redux/actions"
import BaseUrl from '../../utils/config'
import { Carousel } from 'react-responsive-carousel';
import CategoryList from "../category/CategoryList";

const Home = () => {
    const dispatch = useDispatch()
    const bannerItems = useSelector(state => state.TestReducer.bannerData)
    const categoryItems = useSelector(state => state.TestReducer.categoryData)

    useEffect(() => {
        const fetchData = async () => {
            if (bannerItems.length === 0) {
                await BaseUrl.get('/banners').then((res) => {
                    dispatch(getBannerData(res.data))
                }).catch((e) => console.log('something went wrong', e))
            }
            if (categoryItems.length === 0) {
                await BaseUrl.get('/categories').then((res) => {
                    dispatch(getCategoryData(res.data))
                }).catch((e) => console.log('something went wrong', e));
            }
        }
        fetchData();
    }, []);

    return <>
        <Carousel
            preventMovementUntilSwipeScrollTolerance
            swipeable
            showStatus={false}
            showThumbs={false}
            emulateTouch
        >
            {bannerItems
                ?.filter((banner) => banner.isActive)
                .map((banner) => (
                    <div data-testid="carousel" key={banner.id}>
                        <picture>
                            <source media="(max-width:550px)" srcSet={banner.bannerImageUrlMob} />
                            <img src={banner.bannerImageUrl} loading="lazy" alt={banner.bannerImageAlt} />
                        </picture>
                    </div>
                ))}
        </Carousel>
        <div><CategoryList categories={categoryItems} /></div>
    </>
}

export default Home