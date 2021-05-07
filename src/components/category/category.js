import React, { useEffect } from 'react'; 
import "../product/_grid.scss"
import "../button/_button.scss"
import { getCategorydata } from "../../store/actions";
import { useDispatch, useSelector } from 'react-redux';
const Category = () =>
{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategorydata())
    }, []);
    const categoryData = useSelector(state => state.indexReducer.categoryData);
    return (
            <section className="carousel-section" data-testid="category">
                <div className="container" id="gridviewcontainer">
                    {categoryData.map((d, i) => {
                        if(i%2 === 0){
                        return (<div className="grid-container1" id={d.id} key={d.id}>
                                    <div className="grid-item item1">
                                        <img className="home-left-img" src={d.imageUrl} alt={d.name} />
                                    </div>
                                    <div className="grid-item item2">
                                        <h2>{d.name}</h2>
                                        <p>{d.description}</p>
                                        <button type="button" className="btn btn-dark">Explore {d.key}</button>
                                    </div>
                                </div>
                        );
                        }   
                        if(i%2 !== 0){
                        return (<div className="grid-container1" id={d.id} key={d.id}>
                                    <div className="grid-item item4">
                                        <h2>{d.name}</h2>
                                        <p>{d.description}</p>
                                        <button type="button" className="btn btn-dark">Explore {d.key}</button>
                                    </div>
                                    <div className="grid-item item3">
                                        <img className="home-left-img" src={d.imageUrl} alt={d.name} />
                                    </div>
                                </div>
                        );
                        }
                    })}
                </div>
            </section>
    );
}
  
export default Category;