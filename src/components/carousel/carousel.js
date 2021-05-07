import React, { useEffect } from 'react'; 
import "./_carousel.scss"
import {GetCarouseldata} from "../../store/actions";
import { useDispatch, useSelector } from 'react-redux';

const Carousel = (props) =>
{
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(GetCarouseldata())
  }, []);
  const carouselData = useSelector(state => state.indexReducer.carouselData);
    let xDown = null;                                                        
    let yDown = null;      

  const handleTouchStart = (evt) => {
    const firstTouch = evt.touches[0];                                    
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
  };
  
  const handleTouchMove = (evt) => {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          document.getElementById("carouselNext").click(); 
        } else {
          document.getElementById("carouselPrev").click(); 
        }                       
    }
    xDown = null;
    yDown = null;                                             
  };
  
  return (
            <section className="carousel-section" aria-label="carousel">
            <div className="container">
                <div onTouchStart={handleTouchStart.bind(this)} onTouchMove={handleTouchMove.bind(this)} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators" id="carindicators">
                      {carouselData.map((d, i) => (
                      <li key={d.id} data-target="#carouselExampleIndicators" data-slide-to={d.order} className={(i == 0) ? " active" : ""}></li>
                      ))}
                      </ol>
                    <div className="carousel-inner" id="carouseldata"> 
                    {carouselData.map((v, i) => (
                      <div className={`carousel-item ${(i === 0) ? " active" : ""}`}  id={v.id} key={v.id}>
                      <img className="d-block w-100" src={v.bannerImageUrl} alt={v.bannerImageAlt} />
                      </div>
                    ))}
                    </div>
                    <a className="carousel-control-prev" id="carouselPrev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" id="carouselNext" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
  );
}
  
export default Carousel;