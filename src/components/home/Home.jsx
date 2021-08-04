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
                const response = await BaseUrl.get('/banners')
                dispatch(getBannerData(response.data))
            }
            if (categoryItems.length === 0) {
                const categoryResponse = await BaseUrl.get('/categories')
                dispatch(getCategoryData(categoryResponse.data))
            }
        }
        fetchData();
    }, [])

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
                        <img src={banner.bannerImageUrl} loading="lazy" alt={banner.ImageAlt} />
                    </div>
                ))}
        </Carousel>
        <div><CategoryList categories={categoryItems} /></div>
    </>
}

export default Home