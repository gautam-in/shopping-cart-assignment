import React from 'react'
import useFetch from '../Server/useFetch';
import Carousel,{CarouselItem} from '../components/Carousel'
import Constants from '../utils.js/Constants';
import ButtonComponent from '../components/UiComponents/ButtonComponent';
import '../styles/home.scss'
import {useNavigate} from "react-router-dom";
const Home = () => {
	document.title = "Sabka Bazar"
	const navigate = useNavigate();
	const {data,error} = useFetch(Constants.categoriesAPI);
	const {data:bannerData} = useFetch(Constants.bannersAPI);
	return (
		<div className='home__container'>
			<div className="carousal__container">
				<Carousel>
					{bannerData.map(banner => <CarouselItem key={banner.id}><img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/></CarouselItem>)}	
				</Carousel>
			</div>
			{!error && data.filter(dtf => dtf.order >0).sort((a,b) => a.order-b.order).map(categories => {
				return <div className='categories__list' key={categories.id}>
					<div className='categories__image'>
						<img src={categories.imageUrl} alt={categories.key}/>
					</div>
					<div className='categories_description'>
						<h2>{categories.name}</h2>
						<p>{categories.description}</p>
						<ButtonComponent buttonText={`Explore ${categories.buttonText}`} name='explore' type='button' clickHandler={() => navigate(`/products/${categories.id}`, { replace: true })} />
					</div>
				</div>
			})}
			{error && <h1>Something Went Wrong</h1>}
		</div>
	)
}

export default Home