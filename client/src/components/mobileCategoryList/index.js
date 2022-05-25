import { useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import {ROUTES} from '../../utils/constants'
import { useEffect ,useState} from 'react';
import './mobileCategoryList.css'
function MobileCategoryList(props) {
    const categoryList = useSelector(state => state.appReducer.categoriesList);
    let [activeCategory, setActiveCategory] = useState({})
    let [isMenuVisible, setShowMenu] = useState(false)
    const params = useParams();
    let { categoryId} =  params
    let navigate = useNavigate();
    const navigateToCategoryProducts  = (category) =>{
        categoryId == category.id ? navigate(`${ROUTES.products}`): navigate(`${ROUTES.products}/${category.id}`)
        toggle()
    }
    useEffect(() => {
        if(categoryList.length > 0) {
            let activeCategory = categoryList.find((category) => category.id == categoryId)
            setActiveCategory(activeCategory)
        }
    },[categoryId,categoryList ])

    const toggle = () => {
        setShowMenu(!isMenuVisible)
    }
    return (
        <>
        <div className='mobile_category_list_container'>
        <div className='active_category_item' onClick={toggle} aria-haspopup="true"
                aria-expanded={isMenuVisible}>
            <p >{activeCategory.name} </p>
            <i className="fa-solid fa-chevron-down"></i>        
        </div>
           {<div className={`categoryList_container ${isMenuVisible ? '' : 'isMenuVisible'}`}>
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
            </div>}
        </div>
        </>
    );
}

export default MobileCategoryList;
