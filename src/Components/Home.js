import Banner from './Banner';
import '../Style/Home.scss';
import { useDispatch } from 'react-redux';
import { filterCategory } from '../Containers/action';
import { PRODUCTSURL } from '../Url';

function HOME(props) {
    console.log('check', props);
    const { data: { bannerData, categories } } = props;
    const activeCategories = categories.filter(ele => ele.enabled === true);
    const dispatch = useDispatch();
    const onOptionSelect = (selected => {
        dispatch(filterCategory(selected));
        sessionStorage.setItem('selectedCategoryId', selected)
        window.location.assign(PRODUCTSURL);
    });
    return (
        <div className='HomeCon'>
            <Banner bannerData={bannerData} />
            <div className='CategoriesList'>
                {
                  activeCategories.map((ele)=>(
                    <div className='CategoryCon'>
                        <div className='ImageCon'>
                            <img src={ele.imageUrl} alt={ele.name} width="100%"/>
                        </div>
                        <div className='Description'>
                            <p className='DescName'>{ele.name}</p>
                            <p className='DescText'>{ele.description}</p>
                            <button className='CategoryBtn' onClick={()=> onOptionSelect(ele.id)}>Explore {ele.key}</button>
                        </div>
                    </div>
                  ))  
                }
            </div>
        </div>
    )
}

export default HOME;