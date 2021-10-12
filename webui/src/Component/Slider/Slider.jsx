import { useState } from 'react';
import {useQuery} from 'react-query';
import { getBanner } from '../../Services/http';
import { sortAsc } from '../../Utils';
import css from './Slider.module.css';
function Slider(){
    let {data=[],error,isLoading}=useQuery('getBanner',getBanner);
    data=data.filter(item=>item.isActive).sort(sortAsc); // Only active banners and in assending order
    const bannerCount=data.length;

    const [posX, setposX] = useState(0);
    const handleScroll=(tag)=>{
        let newPos;
        if(tag==="NEXT"){
            if(Math.abs(posX-100)< bannerCount*100){
                newPos=posX-100;
            }else{
                newPos=0;
            }
           
        }else{
            if(posX+100 <= 0){
                newPos=posX+100;
            }else{
                newPos=- (bannerCount -1) * 100;
            }
        }
        setposX(newPos);
    }

    
    
    return <section className={css.SliderContainer +" shadowX"}>
            <div className={css.Slider} style={{transform:`translateX(${posX}%)`}}>
                {
                    data.map(banner=><div key={banner.id} className={css.Slide}><img alt={banner.bannerImageAlt} src={banner.bannerImageUrl} /></div>)
                }  
            </div>
            <div className={css.SliderControl}>
                <span onClick={()=>handleScroll("PREV")}>PREV</span>
                <span onClick={()=>handleScroll("NEXT")}>NEXT</span>
            </div>
            <div className={css.SliderDots}>
                {
                    data.map((item,ix)=><span  key={item.id} className={Math.abs(posX) / 100 === ix?css.Selected:''}></span>)
                }
                {isLoading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
            </div>
        </section>
}
export default Slider;