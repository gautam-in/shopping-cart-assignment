import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Banner.css"


function Banner() {
  const navigate = useNavigate();
  const { REACT_APP_CATEGORIES_URL = 'http://localhost:5000/categories' } = process.env;
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axios.get(REACT_APP_CATEGORIES_URL).then(response => {
      let { data } = response;
      data = data.sort(function(a, b) {
        return a.order - b.order;
      });
      data = data.filter(element => element.enabled);
      setBannerData(data);
    }).catch(error => console.error(error));
  }, []);

  if(bannerData.length === 0) return null;
 
  return (
    <>
    {
        bannerData.map((item,index)=>{
            return (<div className='banner container' key={index}>
                <div className={'row '+ (index % 2 !== 0 ? 'reverse' : '')}>
                    <div className='col-6'>
                        <img src={item.imageUrl} alt={item.name}/>
                    </div>
                    <div className='col-6 banner-info'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button onClick={() => navigate(`/products/${item.name.toLowerCase().replaceAll(' ', '-')}`)}>{`Explore ${item.name}`}</button>
                    </div>
                </div>
            </div>)
        })
    }
    
    </>
    );
}

export default Banner;
