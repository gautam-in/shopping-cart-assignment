import React from 'react'
import { MediaURL } from '../../../Utils/httpServices'

function CategoryList(props) {
    const { catgList = [] } = props

    const ImageContainer = (item) => {
        return (
            <div className='catgImage'>
                <img key={"7" + item.key}
                    src={MediaURL + item.imageUrl}
                    alt={item.name}
                />
            </div>
        )
    }

    const DetailsContainer = (item) => {
        return (
            <div className='catgInfoContainer' key={"3" + item.key}>
                <h4 key={"4" + item.key}>{item.name}</h4>
                <p key={"5" + item.key}>{item.description}</p>
                <button key={"6" + item.key}>Explore {item.key}</button>
            </div>
        )
    }

    return (
        <div className='category-component '>
            {
                catgList.map((item, index) => (
                    <div className='catgContainer' key={"1" + item.key}>

                        {
                            index % 2 == 0 ?
                                <>
                                    {ImageContainer(item)}
                                    {DetailsContainer(item)}
                                </>
                                :
                                <>
                                    {DetailsContainer(item)}
                                    {ImageContainer(item)}
                                </>

                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryList