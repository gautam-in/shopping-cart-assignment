import { useEffect } from "react"
import { connect } from 'react-redux'
import Category from "./Category"
import { fetchCategoryList } from '../../redux/actions'

function CategoryList(props) {   
    useEffect(() => {
        props.fetchCategoryList()        
    }, [])

    const renderContent = () => {        
        return props.categoryList.map((categoryObj, i) => {
            return <Category categoryObj = {categoryObj} key = {categoryObj.id} index = {i}/>            
        })
    }    

    return (
        <div>
            { renderContent() }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { categoryList : state.categoryList}
}

export default connect(mapStateToProps, {fetchCategoryList} )(CategoryList);