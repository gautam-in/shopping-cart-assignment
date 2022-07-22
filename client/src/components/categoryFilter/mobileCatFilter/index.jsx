import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./styles.scss";
import {useDispatch, useSelector} from 'react-redux';
import { changecategoryId } from "../../../reducers/homeReducer"
import {sortProductData} from '../../../reducers/productReducer';


const MobileCatFilter = () => {
  const dispatch = useDispatch()
  const {categoryData, categoryId} = useSelector((state)=> state.home)
  return ( 
    <section className='mobilecatfilter-wrapper'>
      <FormControl fullWidth>
        <Select
          value={categoryId || ""}
          onChange={(e)=>{ 
            dispatch(changecategoryId(e.target.value))
            dispatch(sortProductData(e.target.value))
          }}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {categoryData.map(({name, id})=> <MenuItem key={id} value={id}>{name}</MenuItem> )}
        </Select>
      </FormControl>
    </section>
   );
}
 
export default MobileCatFilter;