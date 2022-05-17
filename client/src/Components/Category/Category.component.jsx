
const Category = props => {
    return(
        <div>
            Category 
            {props.data.name}
            <img src={`../..${props.data.imageUrl}`} alt="" />
            {props.data.description}
        </div>
    )
}

export default Category;