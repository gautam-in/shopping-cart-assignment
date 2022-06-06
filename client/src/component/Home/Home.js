import Banner from './Banner';
import Categories from './Categories';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { HomeContainer } from './StyledHome';

const Home = () => {
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/banners')
			.then((res) => res.data)
			.then((result) => {
				setBanners(result);
			});
	}, []);
	return (
		<>
			<HomeContainer>
				<Banner banner={banners} />
				<Categories />
			</HomeContainer>
		</>
	);
};

export default Home;
