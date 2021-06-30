import Box from '../../molecules/Category/Box'
import {FetchCategory} from '../../../api/FetchCategory' 

function Category({categories}){
    const listItems = categories.map((data) =>
        <Box key={data.id} data={data}/>
    );
    
    return (
        <>
            {listItems}
        </>    
    );
}

Category.getInitialProps = async function () {
   const categories = await FetchCategory()
   return {categories} 
}

export default Category