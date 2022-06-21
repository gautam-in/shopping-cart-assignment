import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import "./styles.scss";
import {useSelector} from 'react-redux';


const MobileCatFilter = () => {



  const {categoryData} = useSelector((state)=> state.home)

  console.log(categoryData, 'cat')



  return ( 
    <section className='mobilecatfilter-wrapper'>
      <FormControl fullWidth>
        <Select
          value=""
          onChange={()=>{}}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            None
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </section>
   );
}
 
export default MobileCatFilter;