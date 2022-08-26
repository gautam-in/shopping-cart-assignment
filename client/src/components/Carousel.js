
import React,{useState} from "react";
import '../styles/carousel.scss'
import { useSwipeable } from "react-swipeable";
export const CarouselItem =({ children, width,index}) => {
	return (
		<div className="carousel-item" key={index} style={{ width: width }}>
			{children}
		</div>
	)};

const Carousel = ({ children }) => {
	const [activeIndex,setActiveIndex] = useState(0);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= React.Children.count (children)) {
			newIndex = React.Children.count (children)- 1;
		}
		setActiveIndex(newIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1)
	});


	
	return (
		<div className="carousel">
			<button className='prev__button' onClick={()=> {updateIndex(activeIndex - 1);}}>Prev</button>
			<div {...handlers} className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}} >
				{React.Children.map(children, (child, index) => {
					return React.cloneElement (child, { width: "100%",index:index }) ;
				})}
			</div>
			<button className='next__button' onClick={() => {updateIndex (activeIndex + 1);}}>Next</button>
			<div className="indicators">
				{React.Children.map(children, (child, index) => {
					return(
						<div className="paginate" key={index} onClick={() => {updateIndex (index);}}></div>
					)}
				)}
			</div>
		</div>
	);
}

export default Carousel;