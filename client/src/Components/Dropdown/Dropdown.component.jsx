import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCategories} from '../../redux/actionCreators/dataActionCreators';

import {DropdownContainer,DropDown,DropdownItem} from './Dropdown.styles';

const Dropdown = ({value,onChange}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.categories);

    useEffect(()=>{
        if(!data.data.length)
        dispatch(getCategories());
    },[data.data.length, dispatch]);

    return (
        <DropdownContainer>
            <DropDown onChange={(event)=> onChange(event.target.value)}>
                <DropdownItem key='all' value=''>
                        All
                    </DropdownItem>
                {data && data.data.map(data => (
                    <DropdownItem key={data.key} value={data.id}>
                        {data.name}
                    </DropdownItem>
                ))
            }
            </DropDown>
        </DropdownContainer>
    );
}

export default Dropdown;