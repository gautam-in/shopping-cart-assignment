import axios from "axios"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../features/category/CategorySlice"
import "../../styles/components/categories.scss"

const Categories = () => {

    const { loading, data, error } = useSelector(state => state.CategoryReducer)

    // const [categories, setCategories] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {

        dispatch(fetchCategories())

    }, [])


    return (<main className="Category_container">
        {data && data.map((category, index) => {
            return (
                (index % 2 === 0) ? <div className="category_item" key={index}>
                    <img src={category.imageUrl} alt={`category ${category.name}`}/>
                    <div className="category_metadata">
                        <h3>{category.name}</h3>
                        <p className="category_description">{category.description}</p>
                        <button className="explore_category">{`Explore ${category.name}`}</button>
                    </div>

                </div> : <div className="category_item" key={index}>
                    
                    <div className="category_metadata">
                        <h3>{category.name}</h3>
                        <p className="category_description">{category.description}</p>
                        <button className="explore_category">{`Explore ${category.name}`}</button>
                    </div>
                    <img src={category.imageUrl} alt={`category ${category.name}`} />

                </div>

        )

        })}
    </main>)

}

export default Categories