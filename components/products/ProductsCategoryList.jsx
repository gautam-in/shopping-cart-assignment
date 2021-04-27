import { useEffect } from  'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchCategoryList, fetchProductsList } from '../../redux/actions'

function ProductsCategoryList(props) {
    useEffect(() => {
        props.fetchCategoryList()        
    }, [])
    
    const onButtonClick = (catId) => {        
        props.fetchProductsList(catId)
    }

    const renderContent = () => {        
        return props.categoryList.map((categoryObj, i) => {
            return <CategoryTile key = {i}>
                <div onClick = {() => onButtonClick(categoryObj.id)}>{categoryObj.name}</div>
            </CategoryTile>       
        })
    }    

    return (
        <div>
            {renderContent()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { categoryList : state.categoryList}
}

const CategoryTile = styled.div`
    height: 35px;
    box-shadow: 0 2px 1px #dad3d3d1;
    text-align: left;
    padding: 6%;
    color : #9a9494;
    cursor: pointer;
`

export default connect(mapStateToProps, {fetchCategoryList, fetchProductsList})(ProductsCategoryList);



