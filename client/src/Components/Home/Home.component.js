import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarouselComponent from '../carousel/Carousel.component'

export default function HomeComponent(props) {

    const [categories, setCategories] = useState();

    const getCategories = () => {
        axios.get('http://localhost:5000/categories').then(res => {
            console.log(res.data,'categories data loaded ')
            setCategories(res.data)
        }
        )
    }
    useEffect(() => {
        getCategories();
    }, [])
    return (
        <div className="container">
            <div className="my-2 row box-shaddow-bottom">
            <CarouselComponent></CarouselComponent>
            </div>
            {categories && categories.map((item,index) => (
                <div key={item.key} className="row my-2 box-shaddow-bottom">
                    {index%2==0?<div className="col-4">
                        <img src={item.imageUrl} className="img-fluid"/>
                    </div>:<div className="col-8 m-auto">
                        <h2>{item.name}</h2>
                        <h6>{item.description}</h6>
                        <button className="btn btn-danger">{item.name}</button>
                    </div>}
                    {index%2==1?<div className="col-4">
                        <img src={item.imageUrl} className="img-fluid"/>
                    </div>:<div className="col-8 m-auto">
                        <h2>{item.name}</h2>
                        <h6>{item.description}</h6>
                        <button className="btn btn-danger">{item.name}</button>
                    </div>}
                    
                </div>
            ))}
        </div>
    )
}