import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = (props) => {
    return (<>sdfdsfds
        <Carousel>
            <div>
                <img alt="sdf" src="assets/logo" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="sdf" src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="sdf" src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </>)
}

export default Home;