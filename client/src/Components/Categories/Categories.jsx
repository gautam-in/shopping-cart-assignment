import { useEffect } from 'react';
import CategoryItem from '../Category/CategoryItem';
import './Categories.scss';
import {useSelector,useDispatch} from 'react-redux';
import {getCategories} from '../../redux/actionCreators/actionCreators';


const Categories = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.categories);

    useEffect(()=>{
        if(!data.data.length)
        dispatch(getCategories());
    },[data.data.length, dispatch]);

    return (
        <div className='categoriesContainer'>
            {
                data && data.data.map(data => (
                    data.imageUrl && <CategoryItem key={data.key} data={data}/>
                ))
            }

        </div>
    );
}

export default Categories;