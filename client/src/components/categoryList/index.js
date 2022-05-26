import { useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import './categoryList.css'
import {ROUTES} from '../../utils/constants'
function CategoryList(props) {
    const categoryList = useSelector(state => state.appReducer.categoriesList);
    const params = useParams();
    let navigate = useNavigate();
    const navigateToCategoryProducts  = (category) =>{
        params.categoryId == category.id ? navigate(`${ROUTES.products}`): navigate(`${ROUTES.products}/${category.id}`)
    }
    return (
        <>
            <div className='categoryList_container'>
                <ul className="category_ul" >
                    {categoryList.map((category, index) => {
                        if (category.order !== -1) {
                            return (
                                <li key={category.id}  id={category.id} >
                                    <button className={`category link-text ${params?.categoryId  == category.id? 'active_category': ''}`} onClick={() => {navigateToCategoryProducts(category)}}>{category.name}</button>
                                </li>
                            )
                        }
                        return null
                    })
                    }
                </ul>
            </div>
        </>
    );
}

export default CategoryList;
