import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCategories} from '../../redux/actionCreators/actionCreators';

import './Dropdown.scss';

const Dropdown = ({value,onChange}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.categories);

    useEffect(()=>{
        if(!data.data.length)
        dispatch(getCategories());
    },[data.data.length, dispatch]);

    return (
        <div className='dropdownWrapper'>
            <select className='dropdownWrapper_select' onChange={(event)=> onChange(event.target.value)}>
                <option key='all' value=''>
                        All
                    </option>
                {data && data.data.map(data => (
                    <option key={data.key} value={data.id}>
                        {data.name}
                    </option>
                ))
            }
            </select>
        </div>
    );
}

export default Dropdown;