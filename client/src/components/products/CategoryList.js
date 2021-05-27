import React, { useEffect } from 'react'
import useCategoryList from '../../hooks/useCategoryList'
import endpoints from '../../config/endpoints'
import { setActiveCategory } from '../../store/actions/category'
import { connect } from 'react-redux';

function CategoryList(props) {

    useEffect(() => {
        props.filter(props.activeCategory);
        props.setActiveCategory({ category: props.activeCategory });
    }, [props.activeCategory])

    const list = useCategoryList(endpoints.FETCH_CATEGORY_LIST);

    const setActiveCategory = (category) => {
        if (category.id === props.activeCategory) {
            props.filter(null);
            props.setActiveCategory({ category: null }); // gives full list
        } else {
            props.filter(category.id);
            props.setActiveCategory({ category: category.id }); // gives filtered list
        }
    }

    const handleChange = (e) => {
        props.setActiveCategory({category: e.target.value? e.target.value: null})
    }

    return (
        <aside className="category-list">
            <ul>
                {list.length > 0 && list.map(category => (
                    <li
                        key={category.id}
                        style={{ background: category.id === props.activeCategory ? '#bbb' : '' }}
                        onClick={() => setActiveCategory(category)}>
                        {category.name}
                    </li>
                ))
                }
            </ul>
            <select 
            value = {props.activeCategory? props.activeCategory: ""}
            onChange={(e) => handleChange(e)}>
                <option value = "">Select a category</option>
                {list.length > 0 && list.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                        style={{ background: category.id === props.activeCategory ? '#bbb' : '' }}>
                        {category.name}
                    </option>
                ))
                }
            </select>
        </aside>
    )
}

const mapStateToProps = (state) => ({
    activeCategory: state.category
})

export default connect(mapStateToProps, { setActiveCategory })(CategoryList);
